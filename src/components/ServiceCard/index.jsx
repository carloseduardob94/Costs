import styles from '../ProjectCard/ProjectCard.module.css';
import { BsFillTrashFill } from 'react-icons/bs'

export const ServiceCard = ({ id, name, cost, description, handleRemove }) => {

  function remove(e) {
    e.preventDefault();
    handleRemove(id, cost)
  }

  return(
    <div className={styles.container}>
      <h4>{name}</h4>
      <p>
        <span>Custo total:</span> R${cost}
      </p>
      <p>{description}</p>
      <div className={styles.project_card_actions}>
        <button onClick={remove}>
          <BsFillTrashFill /> Excluir
        </button>
      </div>
    </div>
  )
}