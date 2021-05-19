class User < ApplicationRecord

  attr_reader :password

  validates :username, :password_digest, :session_token, :email, :display_name, :age, presence: true
  validates :username, :email, uniqueness: true
  validates :password, length: { minimum: 6 }, allow_nil: true

  has_one_attached :avatar
  has_one_attached :header

  after_initialize :ensure_session_token

  has_many :songs,
  primary_key: :id,
  foreign_key: :artist_id,
  class_name: :Song

  has_many :comments,
  primary_key: :id,
  foreign_key: :user_id,
  class_name: :Comment

  has_many :likes,
  primary_key: :id,
  foreign_key: :liker_id,
  class_name: :Like

  has_many :liked_songs,
  through: :likes,
  source: :song
  
 
  def self.find_by_credentials(email, password)
    user = User.find_by(email: email)
    return nil unless user
    user.is_password?(password) ? user : nil
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def reset_session_token!
    generate_unique_session_token
    save!
    self.session_token
  end

  private

  def ensure_session_token
    generate_unique_session_token unless self.session_token
  end

  def new_session_token
    SecureRandom.urlsafe_base64
  end

  def generate_unique_session_token
    self.session_token = new_session_token
    while User.find_by(session_token: self.session_token)
      self.session_token = new_session_token
    end
    self.session_token
  end

end