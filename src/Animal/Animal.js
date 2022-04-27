import './Animal.css';

export default function Animal({ name, type, says, top, left }) {
  return (
    <div className='animal-card' style={{ position: 'absolute', top: 50px, left: 30% }}>
      <img src={`/images/${type}.svg`} />
      <span className='name'>{name}</span>
      <span>{type}</span>
      <span>{says}</span>
    </div>
  );
}