import './TrainingsSchedule.scss';
import ArticleListContainer from '../../../components/shared/ArticleListContainer/ArticleListContainer';

function TrainingsSchedule() {
  const schedule = [
    {
      name: 'Grupy Dziecięce (4-6 lat)',
      sections: [
        {
          place: 'SP. Nr 61, ZSS Nr 12 Katowice-Ligota',
          address: 'Ul. Kołobrzeska 8',
          days: 'Wtorek',
          hours: '16:30',
          instructor: 'Sensei Michał Bodziony',
          instructorEmail: 'michalbodziony@oyama-karate.eu',
          instructorPhone: '600-383-727'
        },
        {
          place: 'MDK Południe Katowice - Podlesie',
          address: 'Ul. Sołtysia 25',
          days: 'Poniedziałek 15:20',
          instructor: 'Sensei Michał Bodziony',
          instructorEmail: 'michalbodziony@oyama-karate.eu',
          instructorPhone: '600-383-727'
        },
        {
          place: 'SP. Nr 28 Gliwice',
          address: 'Ul. M. Strzody 4',
          days: 'Piątek 17:15',
          instructor: 'Sensei Michał Bodziony',
          instructorEmail: 'michalbodziony@oyama-karate.eu',
          instructorPhone: '600-383-727'
        }
      ]
    },
    {
      name: 'Grupy Dzieci Szkolnych Dzieci od lat 7',
      sections: [{}]
    }
  ];

  return (
    <section className='trainings-schedule'>
      <div className='grid-container'>
        <section className='container'>
          <header>
            <h1>Harmonogram Zajęć</h1>
          </header>
          <main>
            <table></table>
          </main>
        </section>
        <ArticleListContainer />
      </div>
    </section>
  );
}

export default TrainingsSchedule;
