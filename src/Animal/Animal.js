import './Animal.css';

export default function Animal({ name, type, says }) {
  return (
    <div className='animal-card'>
      <img src={`/images/${name}.svg`} />
      <span className='name'>{name}</span>
      <span>{type}</span>
      <span>{says}</span>
    </div>
  );
}