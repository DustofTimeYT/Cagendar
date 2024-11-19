import { alpha, Box, Card, Container, styled } from "@mui/material";
import RootContainer from "../components/RootContainer";
import NavBar from "../NavBar";

const CalendarBox = styled(Box)(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(7, minmax(0, 1fr))',
  gap: '6px',

}));

const DayCard = styled(Card)(({ theme }) => ({
  width: 155,
  aspectRatio: 'calc(155/100)',
  maxWidth: '155px',
  
  backgroundColor: alpha(theme.palette.secondary.main, 0.8)
}));

const Calendar: React.FC = () => {
  return (
    <>
      <Container>
        <Box>
          <h2>2024</h2>
          <h1>Loctober</h1>
        </Box>
        <CalendarBox>
          <DayCard></DayCard>
          <DayCard></DayCard>
          <DayCard></DayCard>
          <DayCard></DayCard>
          <DayCard></DayCard>
          <DayCard></DayCard>
          <DayCard></DayCard>
          <DayCard></DayCard>
          <DayCard></DayCard>
          <DayCard></DayCard>
          <DayCard></DayCard>
          <DayCard></DayCard>
          <DayCard></DayCard>
          <DayCard></DayCard>
        </CalendarBox>
      </Container>
    </>
  )
}

const Home: React.FC = () => {
  return (
    <>
      <RootContainer>
        <Calendar/>
      </RootContainer>
    </>
  );
};

export default Home;