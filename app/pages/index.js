import Header from '../components/Header';
import Main from '../components/Main';
import TransactionHistory from '../components/TransactionHistory';

const style = {
  wrapper: `h-screen max-h-screen h-min-screen w-screen bg-[#2D242F] text-white select-none flex flex-col justify-between`,
}

function Home() {
  return (
    <div className={style.wrapper}>
      <Header></Header>
      <Main></Main>
      <TransactionHistory></TransactionHistory>
    </div>
  )
}

export default Home;
