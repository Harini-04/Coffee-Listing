import React, { useEffect, useState } from "react";
import Card from "../Card/Card";
import styles from "./Body.module.css";
import heroBg from "../assets/bg-cafe.jpg";
import decorIcon from "../assets/decor.png";

function Body() {
  const [coffees, setCoffees] = useState([]);
  const [filter, setFilter] = useState("all");
  
  useEffect(() => {
    fetch("https://raw.githubusercontent.com/devchallenges-io/curriculum/refs/heads/main/4-frontend-libaries/challenges/group_1/data/simple-coffee-listing-data.json") 
      .then((r) => r.json())
      .then((data) => setCoffees(data))
      .catch((err) =>  console.error(err));
        
  }, []);


  const filtered=filter==="available" ? coffees.filter((coffee)=>coffee.available):coffees;

  
  return (
    <div className={styles.container}>
      <div className={styles.heroSection}>
        <img src={heroBg} alt="Background" className={styles.heroImage}/>
      </div>

      <div className={styles.collectionCard}>
        <img src={decorIcon} alt="decor" className={styles.decorIcon}/>
        <h2 className={styles.title}>Our Collection</h2>
        <p className={styles.description}>
          Introducing our Coffee Collection, a selection of unique coffees from
          different roast types and origins, expertly roasted in small batches
          and shipped fresh weekly.
        </p>

        <div className={styles.toggleButtons}>
          <button className={filter==="all" ? styles.active : ""}
            onClick={() => setFilter("all")}>All Products</button>
          <button className={filter==="available" ? styles.active : ""}
            onClick={() => setFilter("available")}>Available Now</button>
        </div>

        <div className={styles.grid}>
          {filtered.map((coffee)=>(
            <Card key={coffee.id} coffee={coffee}/>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Body;
