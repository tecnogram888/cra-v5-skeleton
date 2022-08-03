import React from 'react'
import PropTypes from 'prop-types';
import { decrement, increment } from './editorSlice'
import { useSelector, useDispatch } from 'react-redux';

import css from './Editor.module.css'

const Editor = (props) => {
    const num_oranges = useSelector((state) => state.editor.num_oranges)
    const dispatch = useDispatch()
    const title = props.value.title
    const children = props.value.children
    let expanded

    if (children.length) {
        expanded = children.map((child, i) => {
            if (child instanceof Object) {
                return <Editor value={child} key={i} />
            } else {
                return <li key={i}>Value is {child.toString()}</li>
            }
        })
    }
    console.log(num_oranges, 'num_or')
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
        <span>{num_oranges}</span>
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