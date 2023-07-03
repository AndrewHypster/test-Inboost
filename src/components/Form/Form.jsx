import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { changeOptionAction } from '../store/actions/option.action'
import * as stl from './style'

const array = new Array(6)
for (let i = 0; i<array.length; i++) array[i] = i+1
localStorage.getItem('now') !== undefined || null? localStorage.setItem('before', JSON.stringify(`${JSON.parse(localStorage.getItem('before'))}-${JSON.parse(localStorage.getItem('now'))}`)) : console.log(123);

const Form = () => {
	const dispatch = useDispatch()
	const { option } = useSelector(state => state.option)

  const changeOption = e => dispatch(changeOptionAction(e.target.selectedOptions[0].index+1))

  useEffect(() => {
    console.log(JSON.parse(localStorage.getItem('before')).split('null-null').slice(1).join())
    option.before === null? localStorage.setItem('before', JSON.stringify(undefined)) : localStorage.setItem('before', JSON.stringify(option.before))
    option.now === null? localStorage.setItem('now', JSON.stringify(undefined)) : localStorage.setItem('now', JSON.stringify(option.now))
  })

	return (
    <stl.form>
      <stl.block>
        <h1>{String(option.now)}</h1>
      </stl.block>
      <stl.select onChange={changeOption}>
        {array.map((el, index) => <stl.option value='1' key={index}>{option.before === 'null-null'? `${index+1}` : `${String(option.before).split('null-null').slice(1).join()}-${index+1}`}</stl.option>)}
      </stl.select>
    </stl.form>
	)
}

export default Form
