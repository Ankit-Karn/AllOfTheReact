import logo from './logo.svg';
import './App.css';
import Card from './component/card';

const data =[
  {
      img : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTP1NaolgWqAelr2-917KIlTN_m-ueOxhgfGw&usqp=CAU",
      name : "M.S. Dhoni",
      work : "Cricketer",
      description : "MS Dhoni, is a former Indian cricketer and captain of the Indian national team in limited-overs formats from 2007 to 2017 and in Test cricket from 2008 to 2014, who plays as a Wicket-keeper-Batsman."
  },
  {
      img : "https://images.news18.com/ibnlive/uploads/2023/01/sadhguru-16727365553x2.jpg?impolicy=website&width=510&height=356",
      name : "Sadhguru",
      work : "Spritual Speaker",
      description : "Sadhguru is the founder and head of the Isha Foundation, based in Coimbatore, India. The foundation, established in 1992, operates an ashram and yoga centre that carries out educational and spiritual activities."
  },
  {
      img : "https://www.tellyupdates.com/wp-content/uploads/2021/10/Bhuvan-Bam-1024x576.jpg",
      name : "Bhuvan Bam",
      work : "video creator",
      description : "Bhuvan Bam is an Indian comedian, writer, singer, actor, songwriter, and YouTube personality from Delhi, India. He is known for his comedy channel on YouTube named BB Ki Vines"
  }
]

function App() {
  return (
    <div className="App">
      <Card data={data}/>
    </div>
  );
}

export default App;
