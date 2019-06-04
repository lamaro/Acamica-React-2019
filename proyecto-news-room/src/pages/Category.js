import React from 'react'
import Container from '@material-ui/core/Container'
import NewsGrid from '../components/NewsGrid'
import Loading from '../components/Loading'

class Category extends React.Component {
    constructor(props){
        console.log(props.location.state.catId)
        super(props)
        this.state = {
            news: [],
            isLoading: true,
            catId: props.location.state.catId
        }
    }

    async componentWillReceiveProps(nextProps) { //Es correcto usar este metodo?
        this.setState({isLoading: true})
        const newCat = nextProps.location.state.catId
        try {
            const response = await fetch(`https://api.canillitapp.com/news/category/${newCat}`);
            if (!response.ok) {
              throw Error(response.statusText);
            }
            const json = await response.json();
            this.setState({ 
              news: json, 
              isLoading: false,
              catId: newCat
            });
            
        } catch (error) {
            console.log(error);
        }
    }

    async componentDidMount(){
        try {
            const response = await fetch(`https://api.canillitapp.com/news/category/${this.state.catId}`);
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

export default Category