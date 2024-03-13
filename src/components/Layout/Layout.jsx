import React, {useEffect, useRef, useState, useMemo, useCallback} from 'react';
// import {Header} from '../Header/Header';
// import {Footer} from '../Footer/Footer';
// import { useCustomHook } from '../../hooks/myCustomHook';
import './Layout.css'
import {Layout, Menu} from 'antd'
import {Outlet, useNavigate} from 'react-router-dom'


import classes from './Layout.module.css'


export const PageLayout = ({children}) => {
    const {Header, Content, Footer, Sider} = Layout;
    const navigate = useNavigate();
 /*   
    const [number, setNumber] = useState(0)
    let param = '1234';
    useEffect(() => {
    return(() => {
        alert('Component mount')
    })
    }, [number])

    //custom hook >
// const value = useCustomHook('change value to custom hook')


    const increment = () => {
        //let _number = number
        setNumber(number + 1)
    }
*/
    //useMemo
    //useCallback

/*
    const memoMethod = useMemo(() => {
        return 'any value'

    })

    const callbackMethod = useCallback(() => {
        return 'any value'

    })
*/
    const menuItems = [
        { id: 1, label: 'Главная', key: 1, link: '/'},
        { id: 2, label: 'Инфо', key: 2, link: '/info'},
        { id: 3, label: 'Пользователь', key: 3, link: '/user'},
        { id: 4, label: 'Вход/Регистрация', key: 4, link: '/auth'}
    ]

    const handleNavigate = (key) => {
        let link = menuItems.find((item) => item.key == key)
        if (link) {
            navigate(link.link)
        }
        
    }
    const textareaRef = useRef()
    return (
        <Layout>
            <Header style = {{ display: 'flex', alignItems: 'center' }}>
                <Menu 
                    items={menuItems}
                    theme='dark'
                    mode='horizontal'
                    defaultSelectedKeys={['1']}
                    onClick={({key}) => handleNavigate(key)}
                />
            </Header>
            <Content>
                <Layout>
                    <Sider theme='light'> <Menu items={menuItems} /></Sider>
                    <Content style={{ height: '100vh', overflowY: 'auto', margin: '0 auto' }}> <Outlet /></Content>
                </Layout>
                
            </Content>
            <Footer></Footer>
        </Layout>
    )
}

/*
export default class LayoutClass extends React.Component {
    construction(props){
        super(props)
        this.state = {
            number: 0
        }
       
    }

    componentDidMount(){

    }
    componentDidUpdate(){

    }
    componentWillUnmount() {

    }
    render(){
        return() => {
            <div>Layout {this.state.number}</div>
        }
        
    }
}
*/