import './index.css'

const HistoryList = props => {
  const {historyList, deleteHistory} = props
  const {timeAccessed, title, domainUrl, logoUrl, id} = historyList

  const onDeleteIcon = () => {
    deleteHistory(id)
  }

  return (
    <li className="history-list-item">
      <div className="time">
        <p className="time-para">{timeAccessed}</p>
      </div>
      <div className="content-container">
        <div className="history-app">
          <img src={logoUrl} alt="domain logo" className="logo" />
          <p className="title">{title}</p>
          <p className="url">{domainUrl}</p>
        </div>
      </div>
      <div className="delete-container">
        <button type="button" className="button-delete" onClick={onDeleteIcon}>
          <img
            src="https://assets.ccbp.in/frontend/react-js/delete-img.png "
            alt="delete"
            className="delete-logo"
          />
        </button>
      </div>
    </li>
  )
}

export default HistoryList
