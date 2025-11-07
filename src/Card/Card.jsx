import React from "react";
import styles from "./Card.module.css";

function Card({ coffee }) {
  const filledStar = "https://cdn-icons-png.flaticon.com/512/1828/1828884.png"; 
  const emptyStar = "https://cdn-icons-png.flaticon.com/512/1828/1828970.png"; 

  const hasRating = coffee.rating && coffee.votes > 0;

  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        {coffee.popular && <span className={styles.tag}>Popular</span>}
        <img src={coffee.image} alt={coffee.name} className={styles.coffeeImage}/>
      </div>

      <div className={styles.details}>
        <div className={styles.row}>
          <h3 className={styles.name}>{coffee.name}</h3>
          <span className={styles.price}>{coffee.price}</span>
        </div>

        <div className={styles.ratingRow}>
          {hasRating ? (
            <>
              <img src={filledStar} alt="star" className={styles.star}/>
              <span className={styles.rating}>{coffee.rating}</span>
              <span className={styles.votes}>({coffee.votes} votes)</span>
            </>
          ) : (
            <>
              <img src={emptyStar} alt="no rating" className={styles.star}/>
              <span className={styles.noRating}>No ratings</span>
            </>
          )}

          {!coffee.available && <span className={styles.soldOut}>Sold out</span>}
        </div>
      </div>
    </div>
  );
}

export default Card;
