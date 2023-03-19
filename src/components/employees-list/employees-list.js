import EmployeesListItem from '../employees-list-item/employees-list-item'

import './employees-list.css'

const EmployeesList = ({data}) => {

  const elements = data.map(el => {
    return (
      <EmployeesListItem /*name={el.name} salary={el.salary}*/ {...el}/>
    );
  })

  

  return (
    <ul className="app-list list-group">
      {elements}
    </ul>
  )
}


export default EmployeesList;