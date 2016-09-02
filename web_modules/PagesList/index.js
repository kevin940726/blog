/* eslint-disable react/no-multi-comp, react/prop-types, react/jsx-no-bind */
import React, { PropTypes } from "react"
import { VirtualScroll, WindowScroller, AutoSizer } from "react-virtualized"
import "react-virtualized/styles.css" // only needs to be imported once

import PagePreview from "../PagePreview"
import styles from "./PagesList.css"

const PagesList = ({ pages }) => {
  return (
    <div>
    {
      pages.length
      ? (
        <ul className={ styles.pageslist }>
          <WindowScroller>
            { ({ height, scrollTop }) => (
              <AutoSizer disableHeight>
                { ({ width }) => (
                  <VirtualScroll
                    autoHeight
                    height={ height }
                    rowCount={ pages.length }
                    rowHeight={ 240 }
                    rowRenderer={ ({ index }) => (
                      <li key={ pages[index].title }><PagePreview { ...pages[index] } /></li>
                    ) }
                    width={ width }
                    scrollTop={ scrollTop }
                  />
                ) }
              </AutoSizer>
            ) }
          </WindowScroller>
        </ul>
      )
      : "No posts yet."
    }
    </div>
  )
}

PagesList.propTypes = {
  pages: PropTypes.array.isRequired,
}

export default PagesList
