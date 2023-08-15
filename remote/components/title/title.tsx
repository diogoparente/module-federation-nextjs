import React from "react";

import styles from "./title.module.css";

const Title = () => {
  return (
    <div className={styles.title}>
      This <b>was</b> loaded from a remote!
    </div>
  );
};

export default Title;
