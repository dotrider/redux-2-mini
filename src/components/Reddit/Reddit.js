import React, { Component } from 'react';
import Card from './../shared/Card/Card';
import Loading from './../shared/Loading/Loading';
import {connect} from 'react-redux';
import {getArticles} from '../../redux/redditReducer';

class Reddit extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = { articles: [], loading: true }
  // }

  componentDidMount(){
    this.props.getArticles()
  }

  render() {
    const articles = this.props.articles.map((article => <Card key={article.id} article={article} />))
    return (
      <div className='news-container'>
        <img src="./redditLogo.png" alt="" style={styles.logo} />
        {this.props.loading ? <Loading /> : <div>{articles}</div>}
      </div>
    )
  }
}



const mapStateToProps = (state) => state.redditReducer;
const mapDispatchToProps = { 
  getArticles
}

export default connect(mapStateToProps, mapDispatchToProps)(Reddit)


const styles = {
  logo: {
    width: '250px',
    margin: '50px 0px'
  }
}