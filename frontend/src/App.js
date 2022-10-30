import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
	decrement,
	increment,
	incrementByAmount,
} from './store/reducers/counterSlice'

const App = () => {
	const count = useSelector(state => state.counter.value)
	const dispatch = useDispatch()

	const obj = {
		value: 10,
	}

	return (
		<div>
			<div>
				<button
					aria-label=' value'
					onClick={() => dispatch(incrementByAmount(obj))}
				>
					Increment
				</button>
				<span>{count}</span>
				<button
					aria-label='Decrement value'
					onClick={() => dispatch(decrement())}
				>
					Decrement
				</button>
			</div>
		</div>
	)
}

export default App
