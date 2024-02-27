import { useState } from "react";
import Logo from "../../assets/Logo.svg";
import { MdSearch, MdShoppingCart } from "react-icons/md";
import styles from "../Header/style.module.scss"

export const Header = ({setOpen}) => {
   const [value, setValue] = useState("");

   return (
      <header className={styles.headerSection}>
         <img src={Logo} alt="Logo Kenzie Burguer" />
         <div className={styles.headerContainer}>
            <button onClick={() => setOpen(true)} className={styles.headerButton} >
                <MdShoppingCart size={21} />
                <span>0</span>
            </button>
            <form className={styles.headerForm}>
               <input
                  type="text"
                  value={value}
                  onChange={(e) => setValue(e.target.value)}
               />
               <button type="submit">
                 <MdSearch size={21} />
               </button>
            </form>
         </div>
      </header>
   );
};
