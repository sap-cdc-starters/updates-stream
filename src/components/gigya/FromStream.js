import {PureComponent, useEffect, useState} from 'react';
 
export default class FromStream extends PureComponent {
    constructor(props) {
        super(props);
        this.state = { value: false };
    }

    componentDidMount() {
        this.initStream();
    }

    componentDidUpdate(prevProps) {
        if (prevProps.stream !== this.props.stream) {
            this.initStream();
        }
    }

    componentWillUnmount() {
        if (this.unSubscribe) {
            this.unSubscribe();
        }
    }


    initStream() {
        if (this.unSubscribe) {
            this.unSubscribe();
            this.unSubscribe = null;
        }

        if (this.props.stream) {
            const onValue = (value) => {
                this.setState(() => ({ value: value }));
            };


            const onError= (value) => {
                this.setState(() => ({ error: value }));
            };
            
            this.props.stream.subscribe(onValue, onError);
            this.unSubscribe = () => this.props.stream.unsubscribe(onValue);
        }
    }
   

    render() {
        const value =()=>{
            return this.state && this.state.value &&  this.props.children.onNext.children(this.state.value);
        };

        const error =()=>{
            return this.state && this.state.error && this.props.children.onError(this.state.error);
        };
        
        return    value() || error()  || this.props.loading();
    }
}

const useObservable = observable => {
    const [state, setState] = useState();

    useEffect(() => {
        const sub = observable.subscribe(setState);
        return () => sub.unsubscribe();
    }, [observable]);

    return state;
};
