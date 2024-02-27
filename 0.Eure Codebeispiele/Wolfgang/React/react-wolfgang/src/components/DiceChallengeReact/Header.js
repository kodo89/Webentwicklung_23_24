import { getImageUrl } from './utils.js';


function People(){

  const people=[{

name:'Maria Skłodowska-Curie',
  profession:'physicist and chemist',
    Awards:'Nobel Prize in Physics, Nobel Prize in Chemistry, Davy Medal, Matteucci Medal',
    Discovered:' polonium (chemical element',
      },
                
    {
    name:'Katsuko Saruhashi',
  profession:'geochemist',
    Awards:'Miyake Prize for geochemistry, Tanaka Prize',
    Discovered:' a method for measuring carbon dioxide in seawater',
      }  
 ]

}
export default function Gallery() {
  return (
    <div>
      <h1>Notable Scientists</h1>
      <section className="profile">
        <h2>{people.name}</h2>
        <img
          className="avatar"
          src={getImageUrl('szV5sdG')}
          alt={people.name}
          width={70}
          height={70}
        />
        <ul>
          <li>
            <b>{people.profession} </b> 
           
          </li>
          <li>
            <b>{people.Awards}  </b> 
            
          </li>
          <li>
            <b>{people.Discovered} </b>
            
          </li>
        </ul>
   </section>
    </div>
  );
}

