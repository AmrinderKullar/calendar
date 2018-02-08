import React, { Component } from 'react';
import styled from 'styled-components';
import { schedule } from '../../utils/dummyData';

const Container = styled.div`
  width: 90%;
  height: 600px;
  padding: 24px;
  position: relative;
`;

const ButtonContainer = styled.div`
  width: 90%;
  margin: 0 auto;
  padding: 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Button = styled.button`
  background-color: #607d8b;
  color: #000000;
  height: 30px;
  width: 50px;
  font-size: 12px;
`;

const MonthContainer = styled.div``;

const CalendarContainer = styled.div`
  width: 90%;
  margin: 0 auto;
  padding: 12px;
  display: flex;
  align-items: center;
  justify-content: baseline;
  flex-wrap: wrap;
`;

const DateContainer = styled.div`
  width: 140px;
  height: 50px;
  border: 1px solid #b0bec5;
  text-align: center;
  line-height: 50px;
`;

const DayContainer = styled.div`
  width: 140px;
  height: 50px;
  border: 1px solid #b0bec5;
  text-align: center;
  line-height: 50px;
`;

const ModalContainer = styled.div`
  width: 100%;
  height: 500px;
  position: absolute;
  background-color: #ffffffad;
  display: flex;
  align-items: end;
  justify-content: center;
`;

const ModalWrapper = styled.div`
  width: 50%;
  height: 500px;
  background-color: #cfd8dc;
  padding: 16px;
`;

const CloseButton = styled.div`
  background-color: #263238;
  color: #ffffff;
  height: 30px;
  width: 30px;
  text-align: center;
  line-height: 30px;
  border-radius: 5px 5px;
`;

const Appointments = styled.div`
  padding: 12px;
  border: 1px solid #455a64;
`;

const AppointmentHeader = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #455a64;
`;

const Header = styled.div`
  width: 100px;
  height: 40px;
  color: #000000;
  font-weight: bold;
`;

const AppointmentRow = styled.div`
  margin: 20px 0 8px 0;
  width: 100%;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #455a64;
`;

const Data = styled.div`
  width: 100px;
  height: 40px;
  color: #000000;
`;

const AddButton = styled.button`
  background-color: #90a4ae;
  color: #000000;
  font-size: 16px;
  width: 60px;
  height: 30px;
  margin: 16px 0 0 8px;
  border-radius: 5px 5px;
`;

const day = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
const months = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
];
class HomeView extends Component {
  constructor(props) {
    super(props);

    const date = new Date();
    const today = date.getDay();
    const month = date.getMonth();
    const year = date.getFullYear();
    this.state = {
      day: today,
      mon: month + 1,
      year: year,
      modalOpen: false,
      selectedDate: undefined,
      selectedMonth: undefined,
      selectedYear: undefined,
      schedule: schedule,
      todaySchedule: [],
    };
  }

  getCalendar = () => {
    const date = new Date();
    const day = date.getDay();
    const month = date.getMonth();
    const year = date.getFullYear();
  };

  getNumberOfDays = () => {
    const { mon, year } = this.state;

    const days = new Date(year, mon, 0).getDate();
    const arr = [];
    for (var i = 1; i <= days; i++) {
      arr.push(i);
    }

    return arr;
  };

  getStartDate = () => {
    const { mon, year } = this.state;
    const days = new Date(year + '-' + mon + '-01').getDay();
    const arr = [];
    for (var i = 1; i <= days; i++) {
      arr.push(i);
    }
    return arr;
  };

  nextMonth = () => {
    const { year, mon } = this.state;
    if (mon === 12) {
      this.setState(() => ({
        mon: 1,
        year: year + 1,
      }));
    } else {
      this.setState(() => ({
        mon: mon + 1,
      }));
    }
  };

  prevMonth = () => {
    const { year, mon } = this.state;
    if (mon === 1) {
      this.setState(() => ({
        mon: 12,
        year: year - 1,
      }));
    } else {
      this.setState(() => ({
        mon: mon - 1,
      }));
    }
  };

  openModal = (day, month, year) => {
    const today = Object.keys(schedule).map(scheduleId => {
      const sch = schedule[scheduleId];
      console.log(
        sch.date.day,
        day,
        sch.date.month,
        month,
        sch.date.year,
        year,
      );
      if (
        sch.date.day === day &&
        sch.date.month === month &&
        sch.date.year === year
      ) {
        return sch;
      }
      return null;
    });

    this.setState(() => ({
      modalOpen: true,
      todaySchedule: today,
      // selectedDate: day,,
      // selectedMonth: month,
      // selectedYear: year,
    }));
  };

  closeModal = () => {
    this.setState(() => ({
      modalOpen: false,
    }));
  };

  getTodaySchedule = () => {
    const { selectedDate, selectedMonth, selectedYear } = this.state;
  };

  render() {
    const { mon, year, modalOpen, schedule, todaySchedule } = this.state;
    console.log(todaySchedule);
    return (
      <Container>
        {modalOpen ? (
          <ModalContainer>
            <ModalWrapper>
              <Appointments>
                <AppointmentHeader>
                  <Header>Name</Header>
                  <Header>Time</Header>
                </AppointmentHeader>
                {todaySchedule.map(sch => (
                  <AppointmentRow>
                    <Data>{sch.name}</Data>
                    <Data>{sch.time}</Data>
                  </AppointmentRow>
                ))}
              </Appointments>
              <AddButton>Add</AddButton>
            </ModalWrapper>
            <CloseButton onClick={this.closeModal}>X</CloseButton>
          </ModalContainer>
        ) : null}
        <ButtonContainer>
          <Button onClick={this.prevMonth}>Prev</Button>
          <MonthContainer>{months[mon - 1] + ' ' + year}</MonthContainer>
          <Button onClick={this.nextMonth}>Next</Button>
        </ButtonContainer>
        <CalendarContainer>
          {day.map(d => <DayContainer key={d}>{d}</DayContainer>)}
          {this.getStartDate().map(day => (
            <DateContainer key={day}>{''}</DateContainer>
          ))}
          {this.getNumberOfDays().map(day => (
            <DateContainer
              key={day}
              onClick={() => {
                this.openModal(day, mon, year);
              }}
            >
              {day}
            </DateContainer>
          ))}
        </CalendarContainer>
      </Container>
    );
  }
}

export default HomeView;
