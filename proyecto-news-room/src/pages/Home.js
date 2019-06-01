import React from 'react'
import Container from '@material-ui/core/Container'
import NewsGrid from '../components/NewsGrid'
import Loading from '../components/Loading'

class Home extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            news: [],
            isLoading: true
        }
    }

    async componentDidMount(){
        try {
            const response = await fetch('https://api.canillitapp.com/latest/2019-06-01');
            if (!response.ok) {
              throw Error(response.statusText);
            }
            const json = await response.json();
            this.setState({ 
              news: json, 
              isLoading: false
            });
            
        } catch (error) {
            console.log(error);
        }
    }

    render(){
    return(
        <div>
            {this.state.isLoading && <Loading />}
            <Container>
                {!this.state.isLoading && <NewsGrid news={this.state.news} />}
            </Container>
        </div>
    )}
}

export default Home