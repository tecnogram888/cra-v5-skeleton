import React from 'react'
import PropTypes from 'prop-types';
import { decrement, increment } from './editorSlice'
import { useSelector, useDispatch } from 'react-redux';

import css from './Editor.module.css'

const Editor = (props) => {
    const { id } = props
    const editorDB = useSelector((state) => state.editor.editorDB)
    const dispatch = useDispatch()

    console.log('props', props)
    console.log('id', id)
    console.log('editorDB', editorDB)
    const mainObj = editorDB[id]
    console.log('main', mainObj)
    const title = mainObj.title
    const children = mainObj.children

    let expanded

    if (children.length) {
        expanded = children.map((child, i) => {
            if (Number.isInteger(child)) {
                return <Editor id={child} key={i} />
            } else {
                return <li key={i}>Value is {child.toString()}</li>
            }
        })
    }
    // console.log(num_oranges, 'num_or')
    const titleString = `Title is ${title}`;
    return <div className={css.editorBox}>
        <div key={0}>{titleString}</div>
        {expanded}
        <button
            aria-label="Increment value"
            onClick={() => dispatch(increment())}
        >
            Increment
        </button>
        {/* <span>{num_oranges}</span> */}
        <button
            aria-label="Decrement value"
            onClick={() => dispatch(decrement())}
        >
            Decrement
        </button>
    </div>
}

// Editor.propTypes = {
//     title: PropTypes.string,
//     children: PropTypes.arrayOf(PropTypes.object)
// }

export default Editor