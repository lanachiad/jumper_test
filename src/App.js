import Button from './Button';
import './App.css';

function Adoption() {
  return (
    <div className="App">
      <h1>Pet Adoption Resources<span>for the</span>Greater NYC Area</h1>
      <div id="link-wrapper">
        <Button url="https://www.nycacc.org/" name="Animal Care Centers of NYC" />
        <Button url="https://www.aspca.org/nyc/aspca-adoption-center-nyc" name="ASPCA" />
        <Button url="https://animalhaven.org/" name="Animal Haven Shelter" />
        <Button url="https://www.socialteesnyc.org/" name="Social Tees Animal Rescue" />
      </div>
    </div>
  );
}

export default Adoption;
