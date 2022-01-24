import { tab } from '@testing-library/user-event/dist/tab';
import Calendar from '../../components/shared/Calendar/Calendar';
import './CalendarPage.scss';

function CalendarPage() {
  return (
    <article className='container'>
      <h1 className='calendar-title'>Kalendarz 2021</h1>
      <div className='calendar-description'>
        KALENDARZ IMPREZ KLUBOWYCH ORAZ OYAMA PFK W II POŁOWIE 2021 ROKU <br />{' '}
        (stan na 26.08.2021.) <br /> <br />
        <span>
          Zawody Klubowe organizowane przez ŚKK "GOLIAT" zostaną uzupełnione w
          najbliższym czasie.
        </span>
      </div>
      {/* <table className='outside-table'>
        <tbody>
          <tr>
            <td>
              <table>
                <tbody>
                  <tr>
                    <td>IX-X 2021</td>
                    <td>Akcja zapisów do klubów OYAMA PFK</td>
                  </tr>
                  <tr>
                    <td>11.09.2021</td>
                    <td>
                      Ogólnopolskie Seminarium Oyama Karate dla kandydatów do
                      udziału w egzaminie mistrzowskim, Turek
                    </td>
                  </tr>
                  <tr>
                    <td>09-10.10.21</td>
                    <td>
                      XIX Seminarium Szkoleniowo-Kwalifikacyjne z okazji
                      30-lecia Oyama Karate w Polsce, Kraków
                    </td>
                  </tr>
                  <tr>
                    <td>09-10.10.21 </td>
                    <td>
                      Zjazdy Sprawozdawczo-Wyborcze OYAMA IKF i OYAMA PFK,
                      Kraków
                    </td>
                  </tr>
                  <tr>
                    <td>16.10.21 </td>
                    <td>
                      Puchar Makroregionu Wschodniego OYAMA PFK (Kumite),
                      Tarnobrzeg
                    </td>
                  </tr>
                  <tr>
                    <td>23.10.21 </td>
                    <td>
                      Mistrzostwa Makroregionu Południowego OYAMA PFK (Kumite),
                      Częstochowa.
                    </td>
                  </tr>
                  <tr>
                    <td>X/XI 2021 </td>
                    <td>
                      Zawody rangi makroregionalnej OYAMA Karate w Kumite i Kata
                    </td>
                  </tr>
                  <tr>
                    <td>27-28.11.2021 </td>
                    <td>Mistrzostwa Polski OYAMA PFK w Kumite, Rzeszów.</td>
                  </tr>
                  <tr>
                    <td>11-12.12.2021 </td>
                    <td>IV Wagowe Mistrzostwa Europy WKB, Leżajsk</td>
                  </tr>
                  <tr>
                    <td>XI/XII 2021 </td>
                    <dt>Zimowa sesja egzaminacyjna w klubach.</dt>
                  </tr>
                  <tr>
                    <td>XI/XII 2021 </td>
                    <td>Klubowe i lokalne zawody w Kata oraz Kumite.</td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
        </tbody>
      </table> */}

      <Calendar />

      <div className='calendar-info'>
        <ol className='calendar-info-list'>
          <li className='calendar-info-list-item'>
            Organizatorzy ww. imprez zastrzegają sobie prawo do dokonania zmian
            organizacyjno-programowych, będących następstwem ewentualnych
            zarządzeń władz centralnych lub lokalnych, wynikających np. z
            epidemii COVID-19.
          </li>
          <li className='calendar-info-list-item'>
            Kalendarz nie zawiera zawodów organizowanych przez federacje karate
            współpracujące z OYAMA PFK,
          </li>
        </ol>
      </div>
    </article>
  );
}

export default CalendarPage;
