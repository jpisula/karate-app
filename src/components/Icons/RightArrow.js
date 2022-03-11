const RightArrow = ({ className, onClick }) => (
  <svg
    onClick={onClick}
    className={className}
    width='46'
    height='44'
    viewBox='0 0 46 44'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      d='M0 4C0 1.79086 1.79086 0 4 0H42C44.2091 0 46 1.79086 46 4V40C46 42.2091 44.2091 44 42 44H4C1.79086 44 0 42.2091 0 40V4Z'
      fill='#d9251c'
    />
    <path
      d='M16 22H30'
      stroke='white'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M23 15L30 22L23 29'
      stroke='white'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

export default RightArrow;
