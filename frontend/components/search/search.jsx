import React from "react";
import { Link, Redirect } from "react-router-dom";
class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filtered: [],
      showMenu: false,
      enterClickRedirect: false
    };

    this.showMenu = this.showMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    this.props.fetchSongs();
    this.setState({
      filtered: this.props.songs,
    });
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      filtered: nextProps.songs,
    });
  }

  handleChange(e) {
    let currentList = [];
    let newList = [];

    if (e.target.value !== "") {
      currentList = this.props.songs;
      newList = currentList.filter((item) => {
        let lc;
        typeof item == "object"
          ? (lc = item.title.toLowerCase())
          : (lc = item.toLowerCase());
        let filter = e.target.value.toLowerCase();

        return lc.includes(filter);
      });
    } else {
      // If the search bar is empty, set newList to original task list
      newList = this.props.songs;
    }
    // Set the filtered state based on what our rules added to newList
    this.setState({
      filtered: newList,
    });
  }

  showMenu(event) {
    event.preventDefault();

    this.setState({ showMenu: true }, () => {
      document.addEventListener("click", this.closeMenu);
    });
  }

  closeMenu(event) {
    if (!this.dropdownMenu) {
      return null;
    }
    if (
      event.target == "search-res-link" ||
      !this.dropdownMenu.contains(event.target)
    ) {
      this.setState({ showMenu: false }, () => {
        document.removeEventListener("click", this.closeMenu);
      });
    }
  }

  handleEnterClick = (e) => {
    const { filtered } = this.state;
    if (e.key === "Enter") {
      if (filtered.length > 0) {
        this.setState({ enterClickRedirect: true });
      }
    }
  };

  render() {
    const { filtered, enterClickRedirect } = this.state;
    let keyIdx = 0;
    return (

      <
        // className={this.props.location == 'header' ? '' : 'splash-search'}
        >
        {(() => {
          if (enterClickRedirect) {
            // debugger;
            if (typeof filtered[0] == "object") {
              return (
                <Redirect
                  to={{
                    pathname: `/songs/${filtered[0].id}`,
                  }}
                />
              )
            }
          } else {
            return null;
          }
        })()}

        <input
          ref={(element) => {
            this.dropdownMenu = element;
          }}
          type="text"
          className="headerSearch__input"
          className={this.props.location == 'header' ? 'headerSearch__input' : 'splash-search-bar'}
          onChange={this.handleChange}
          onFocus={this.showMenu}
          placeholder={this.props.location == 'header' ? 'Search' : 'Search for tracks, podcasts, songs'}
          onKeyPress={this.handleEnterClick}
        />
        {this.state.showMenu ? (
          <ul id="search-res" className="search-results-ul">
            {this.state.filtered.map((item) => {
              keyIdx += 1;
              return (
                <li key={keyIdx} className="search-results-li">
                  <Link
                    className="search-res-link"
                    to={{
                      pathname: `/songs/${item.id}`,
                    }}
                  >
                    <img className="search-img-thumb"
                      src={item.imageUrl}
                    />
                    {item.title}
                  </Link>

                </li>
              )
            })}
          </ul>
        ) : null}
      </>

    );
  }
}
export default Search;
