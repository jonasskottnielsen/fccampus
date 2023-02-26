import Footer from '../../components/footer/Footer'
import { Card } from '../../components'
import React from 'react'

import './players.css'

const Players = () => {

  const playerArrayMen = [
    {
      name: "Jonas Nielsen",
      position: "Målmand"
    },
    {
      name: "Frederik Draborg",
      position: "Midtbane"
    },
    {
      name: "Ægget",
      position: "Midtbane"
    },
    {
      name: "Ægget",
      position: "Midtbane"
    },
  ]
  const playerArrayWomen = [
    {
      name: "Jonas Nielsen2",
      position: "Målmand"
    },
    {
      name: "Frederik Draborg2",
      position: "Forsvar"
    }
  ]
  return (
    <>
      <div className='players section__padding'>
        <div className="players__tabs">
          <h1>Vores hold</h1>
          <Tabs>
            <Tab label="Herrehold">
              <div className='players__tabs-content'>
                {playerArrayMen.map((player, index) => {
                  return <Card key={index} index={index + 1} name={player.name} position={player.position}></Card>
                })}
              </div>
            </Tab>
            <Tab label="Kvindehold">
              <div className='players__tabs-content'>
                {playerArrayWomen.map((player, index) => {
                  return <Card key={index} index={index + 1} name={player.name} position={player.position}></Card>
                })}
              </div>
            </Tab>
          </Tabs>
        </div>

      </div>
      <Footer />
    </>

  )
}
class Tabs extends React.Component {
  state = {
    activeTab: this.props.children[0].props.label
  }
  changeTab = (tab) => {

    this.setState({ activeTab: tab });
  };
  render() {

    let content;
    let buttons = [];
    return (
      <div>
        {React.Children.map(this.props.children, child => {
          buttons.push(child.props.label)
          if (child.props.label === this.state.activeTab) content = child.props.children
        })}

        <TabButtons activeTab={this.state.activeTab} buttons={buttons} changeTab={this.changeTab} />
        <div className="tab-content">{content}</div>

      </div>
    );
  }
}

const TabButtons = ({ buttons, changeTab, activeTab }) => {

  return (
    <div className="tab-buttons">
      {buttons.map(button => {
        return <button className={button === activeTab ? 'active' : ''} onClick={() => changeTab(button)}>{button}</button>
      })}
    </div>
  )
}

const Tab = props => {
  return (
    <React.Fragment>
      {props.children}
    </React.Fragment>
  )
}

export default Players