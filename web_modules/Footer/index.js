import React, { Component } from "react"

import styles from "./index.css"

export default class Footer extends Component {

  render() {
    return (
      <footer className={ styles.footer }>
        { "Powered by " }
        <a
          target="_blank"
          href={ process.env.PHENOMIC_HOMEPAGE }
          className={ styles.link }
        >
          <span className={ styles.reference }>
            {  `<${ process.env.PHENOMIC_NAME} />` }
          </span>
        </a>

        { " | " }
        { "© 2016 Kai Hao, unless otherwise noted." }
      </footer>
    )
  }
}
