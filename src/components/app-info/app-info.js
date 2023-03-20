import './app-info.css';

const AppInfo = ({employees, increased}) => {
  return (
    <div className="app-info">
      <h1>Учет сотрудников Департамента Актеров</h1>
      <h2>Общее число сотрудников:{employees}</h2>
      <h2>Премию выписать следующим сотрудникам:{increased}</h2>
    </div>
  )
}

export default AppInfo;