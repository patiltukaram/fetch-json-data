import styles from "./UserCard.module.css";

function UserCard({ user }) {
  const {
    name,
    username,
    email,
    phone,
    website,
    address: {
      street,
      suite,
      city,
      zipcode,
      geo: { lat, lng },
    },
    company: { name: companyName, catchPhrase, bs },
  } = user;

  return (
    <>
      <div className={styles.card}>
        <div className={styles.details}>
          <h2>
            {name} <span>{username}</span>
          </h2>
          <p>
            <strong>Email:</strong>
            {email}
          </p>
          <p>
            <strong>Phone:</strong>
            {phone}
          </p>
          <p>
            <strong>Website:</strong>
            <a href={`http://${website}`} target="_blank" rel="noreferrer">
              {website}
            </a>
          </p>
        </div>
        <div className={styles.address}>
          <div className={styles.home}>
            <h3>📍Address</h3>
            <p>
              {suite}
              {street}
            </p>
            <p>
              {city}
              {zipcode}
            </p>
            <p>
              <strong>Geo:</strong>
              {lat},{lng}
            </p>
          </div>
          <div className={styles.company}>
          <h3>🏢 Company</h3>
          <p>
            <strong>Name:</strong>
            {companyName}
          </p>
          <p>
            <strong>CatchPhrase:</strong>"{catchPhrase}"
          </p>
          <p>
            <strong>BS:</strong>
            {bs}
          </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default UserCard;
