import React, { Component } from 'react';
import './home.styles.css';

Math.logb = function(number, base) {
    return Math.log(number) / Math.log(base);
};

export default class App extends Component {
    constructor(props) {
        super(props);
        this.socket = null;
        this.state = {
            impact: {
                HP: '',
                Hunger: '',
                Fatigue: '',
                Fear: '',
                Aggression: '',
                Caution: '',
                Level: 0,
            },
            weight: {
                HP: 0,
                Hunger: 0,
                Fatigue: 0,
                Fear: 0,
                Aggression: 0,
                Caution: 0,
                Level: 1,
            },
            lin: {
                HP: '',
                Hunger: '',
                Fatigue: '',
                Fear: '',
                Aggression: '',
                Caution: '',
                Level: '',
            },
            func: {
                HP: '',
                Hunger: '',
                Fatigue: '',
                Fear: '',
                Aggression: '',
                Caution: '',
                Level: '',
            },
            attack: {
                lin: '',
                func: '',
            }
        };

        this.valueChange = this.valueChange.bind(this);
        this.calculation = this.calculation.bind(this);
    }

    componentDidMount() {
    }

    valueChange(type, value) {
        let t = type.split(' ')[1];
        let stimulus = type.split(' ')[2];
        let val = value.replace(/ /g,'');
        if (t === 'impact'){
            let impact = this.state.impact;
            if (stimulus === 'HP') {
                impact.HP = val;
/*                let Hunger = impact.Hunger/10;
                    (Hunger <= 0 ? Hunger = 0.01 : '');
                let fear = Math.pow(Number(impact.HP)/50 - 1.7 + Number(impact.Hunger),2);
                    (fear <= 0 ? fear = 0.001 : (fear > 1 ? fear = 1 : ''));
                    impact.Fear = (1 - Math.sin(fear)/fear).toFixed(3);
                    console.log(fear);
                let caution1 = Number(impact.HP)/65 - Number(impact.Fatigue)*1.1;
                    (caution1 <= 0 ? caution1 = 0.001 : (caution1 > 1 ? caution1 = 1 : ''));
                let caution2 = (1/caution1 + Math.pow((2*Math.pow(caution1,2)-Math.pow(caution1,3)),1/3)/1.2-2).toFixed(3);
                    (caution2 <= 0 ? caution2 = 0.001 : (caution2 > 1 ? caution2 = 1 : ''));
                    impact.Caution = caution2;
                let Agr1 = Math.logb(Hunger,2).toFixed(3);
                let Agr2 = Math.pow(Number(impact.Caution*1.1) + Number(impact.Fear),2).toFixed(3);
                    (Agr1 <= 0 ? Agr1 = 0.001 : (Agr1 > 1 ? Agr1 = 1 : ''));
                    (Agr2 <= 0 ? Agr2 = 0.001 : (Agr2 > 1 ? Agr2 = 1 : ''));
                    impact.Aggression = Math.pow(Math.exp(1),Agr1-Agr2).toFixed(3);*/
            }
            if (stimulus === 'Hunger') {
                impact.Hunger = val;
/*                let Hunger = impact.Hunger/10;
                    (Hunger <= 0 ? Hunger = 0.01 : '');
                let fear = Math.pow(Number(impact.HP)/50 - 1.7 + Number(impact.Hunger),2);
                    (fear <= 0 ? fear = 0.001 : (fear > 1 ? fear = 1 : ''));
                    impact.Fear = (1 - Math.sin(fear)/fear).toFixed(3);
                let caution1 = Number(impact.HP)/65 - Number(impact.Fatigue)*1.1;
                    (caution1 <= 0 ? caution1 = 0.001 : (caution1 > 1 ? caution1 = 1 : ''));
                let caution2 = (1/caution1 + Math.pow((2*Math.pow(caution1,2)-Math.pow(caution1,3)),1/3)/1.2-2).toFixed(3);
                    (caution2 <= 0 ? caution2 = 0.001 : (caution2 > 1 ? caution2 = 1 : ''));
                    impact.Caution = caution2;
                let Agr1 = Math.logb(Hunger,2).toFixed(3);
                let Agr2 = Math.pow(Number(impact.Caution*1.1) + Number(impact.Fear),2).toFixed(3);
                    (Agr1 <= 0 ? Agr1 = 0.001 : (Agr1 > 1 ? Agr1 = 1 : ''));
                    (Agr2 <= 0 ? Agr2 = 0.001 : (Agr2 > 1 ? Agr2 = 1 : ''));
                    impact.Aggression = Math.pow(Math.exp(1),Agr1-Agr2).toFixed(3);*/
            }
            if (stimulus === 'Fatigue') {
                impact.Fatigue = val;
/*                let Hunger = impact.Hunger/10;
                    (Hunger <= 0 ? Hunger = 0.01 : '');
                let fear = Math.pow(Number(impact.HP)/50 - 1.7 + Number(impact.Hunger),2);
                    (fear <= 0 ? fear = 0.001 : (fear > 1 ? fear = 1 : ''));
                    impact.Fear = (1 - Math.sin(fear)/fear).toFixed(3);
                let caution1 = Number(impact.HP)/65 - Number(impact.Fatigue)*1.1;
                    (caution1 <= 0 ? caution1 = 0.001 : (caution1 > 1 ? caution1 = 1 : ''));
                let caution2 = (1/caution1 + Math.pow((2*Math.pow(caution1,2)-Math.pow(caution1,3)),1/3)/1.2-2).toFixed(3);
                    (caution2 <= 0 ? caution2 = 0.001 : (caution2 > 1 ? caution2 = 1 : ''));
                    impact.Caution = caution2;
                let Agr1 = Math.logb(Hunger,2).toFixed(3);
                let Agr2 = Math.pow(Number(impact.Caution*1.1) + Number(impact.Fear),2).toFixed(3);
                    (Agr1 <= 0 ? Agr1 = 0.001 : (Agr1 > 1 ? Agr1 = 1 : ''));
                    (Agr2 <= 0 ? Agr2 = 0.001 : (Agr2 > 1 ? Agr2 = 1 : ''));
                    impact.Aggression = Math.pow(Math.exp(1),Agr1-Agr2).toFixed(3);*/
            }
            if (stimulus === 'Fear') {
                impact.Fear = val;
            }
            if (stimulus === 'Aggression') {
                impact.Aggression = val;
            }
            if (stimulus === 'Caution') {
                impact.Caution = val;
            }
            if (stimulus === 'Level') {
                impact.Level = val;
            }
/*
            let Hunger = impact.Hunger/10;
                (Hunger <= 0 ? Hunger = 0.01 : '');
            let fear = Math.pow(Number(impact.HP)/100 - 1.7 + Number(impact.Hunger),2);
                (fear <= 0 ? fear = 0.001 : (fear > 1 ? fear = 1 : ''));
                impact.Fear = (1 - Math.sin(fear)/fear).toFixed(3);
            let caution1 = Number(impact.HP)/65 - Number(impact.Fatigue)*1.1;
                (caution1 <= 0 ? caution1 = 0.001 : (caution1 > 1 ? caution1 = 1 : ''));
                let caution2 = (1/caution1 + Math.pow((3*Math.pow(caution1,2)-Math.pow(caution1,3)),1/3)/1.2-2).toFixed(3);
                (caution2 <= 0 ? caution2 = 0.001 : (caution2 > 1 ? caution2 = 1 : ''));
                impact.Caution = caution2;
            let Agr1 = Math.logb(Hunger,2).toFixed(3);
                let Agr2 = Math.pow(Number(impact.Caution*1.1) + Number(impact.Fear),2).toFixed(3);
                impact.Aggression = Math.pow(Math.exp(1),Agr1-Agr2).toFixed(3);
*/

            this.setState({impact: impact});
        }
        if (t === 'weight'){
            let weight = this.state.weight;
            if (stimulus === 'HP') weight.HP = val;
            if (stimulus === 'Hunger') weight.Hunger = val;
            if (stimulus === 'Fatigue') weight.Fatigue = val;
            if (stimulus === 'Fear') weight.Fear = val;
            if (stimulus === 'Aggression') weight.Aggression = val;
            if (stimulus === 'Caution') weight.Caution = val;
            if (stimulus === 'Level') weight.Level = val;
            this.setState({weight: weight});
        }


        this.calculation();
    }

    calculation() {
        let lin = this.state.lin;
        let func = this.state.func;
        let impact = this.state.impact;
        let weight = this.state.weight;
        let attack = this.state.attack;
        let Hunger = impact.Hunger;
            (Hunger <= 0 ? Hunger = 0.001 : '');

        lin.HP = Number((impact.HP*weight.HP/100).toFixed(3));
        lin.Hunger = Number((impact.Hunger*weight.Hunger).toFixed(3));
        lin.Fatigue = Number((1 - impact.Fatigue*weight.Fatigue).toFixed(3));
        lin.Fear = Number((impact.Fear*weight.Fear).toFixed(3));
        lin.Aggression = Number((impact.Aggression*weight.Aggression).toFixed(3));
        lin.Caution = Number((impact.Caution*weight.Caution).toFixed(3));
        lin.Level = Number((impact.Level*weight.Level/100).toFixed(3));

        func.HP = Number(Math.log10(impact.HP*weight.HP).toFixed(3));
        func.Hunger = Number(Math.tan(impact.Hunger*weight.Hunger).toFixed(3));
        func.Fatigue = Number((1 - Math.sin(impact.Fatigue*weight.Fatigue*1.5)).toFixed(3));
        func.Fear = Number(1-Math.atan(2.5*impact.Fear*weight.Fear)).toFixed(3);
        func.Aggression = Number((1 + Math.logb(impact.Aggression*weight.Aggression,5)).toFixed(3));
        func.Caution = Number(Math.asin(1 - impact.Caution*weight.Caution*2).toFixed(3));
        func.Level = Number((Math.pow(2,impact.Level*weight.Level/15) - 1).toFixed(3));

        attack.lin = ((lin.HP + lin.Hunger + lin.Fatigue + lin.Fear + lin.Aggression + lin.Caution + lin.Level)/5).toFixed(3);
        attack.func = ((func.HP + func.Hunger + 2*func.Fatigue  - (1 - func.Fear) + func.Aggression - (1 - func.Caution) + func.Level)/5).toFixed(3);
        (attack.lin > 1 ? attack.lin = 1 : (attack.lin < 0 ? attack.lin = 0 : ''));
        (attack.func > 1 ? attack.func = 1 : (attack.func < 0 ? attack.func = 0 : ''));

        this.setState({
            lin: lin,
            func: func,
            attack: attack
        });
    }


    render() {

        return (
		<div className="app">
            <div className="Component">
                <div className="version">version 2</div>
                <table>
                    <tbody>
                    <tr>
                        <td/>
                        <td>От 1 до 100</td>
                        <td>От 0 до 1</td>
                        <td>От 0 до 1</td>
                        <td>От 0 до 1</td>
                        <td>От 0.01 до 1</td>
                        <td>От 0 до 1</td>
                        {/*<td>От 0 до ...</td>*/}

                    </tr>
                    <tr>
                        <td style={{fontWeight: 'bold'}}>Стимул</td>
                        <td>Жизнь</td>
                        <td>Голод</td>
                        <td>Усталость</td>
                        <td>Страх</td>
                        <td>Агрессия</td>
                        <td>Осторожность</td>
                        {/*<td>Уровень</td>*/}
                    </tr>

                    <tr>
                        <td style={{fontWeight: 'bold'}}>Значение</td>
                        <td><input type='text' className='input impact HP' value={this.state.impact.HP} onChange={(v)=> this.valueChange(v.target.className, v.target.value)}/></td>
                        <td><input type='text' className='input impact Hunger' value={this.state.impact.Hunger} onChange={(v)=> this.valueChange(v.target.className, v.target.value)}/></td>
                        <td><input type='text' className='input impact Fatigue' value={this.state.impact.Fatigue} onChange={(v)=> this.valueChange(v.target.className, v.target.value)}/></td>
                        <td><input type='text' className='input impact Fear' value={this.state.impact.Fear} onChange={(v)=> this.valueChange(v.target.className, v.target.value)}/></td>
                        <td><input type='text' className='input impact Aggression' value={this.state.impact.Aggression} onChange={(v)=> this.valueChange(v.target.className, v.target.value)}/></td>
                        <td><input type='text' className='input impact Caution' value={this.state.impact.Caution} onChange={(v)=> this.valueChange(v.target.className, v.target.value)}/></td>
                        {/*<td><input type='text' className='input impact Level' value={this.state.impact.Level} onChange={(v)=> this.valueChange(v.target.className, v.target.value)}/></td>*/}
                    </tr>
                    <tr>
                        <td style={{fontWeight: 'bold'}}>Коэф. влиянния</td>
                        <td><input type='text' className='input weight HP' value={this.state.weight.HP} onChange={(v)=> this.valueChange(v.target.className, v.target.value)}/></td>
                        <td><input type='text' className='input weight Hunger' value={this.state.weight.Hunger} onChange={(v)=> this.valueChange(v.target.className, v.target.value)}/></td>
                        <td><input type='text' className='input weight Fatigue' value={this.state.weight.Fatigue} onChange={(v)=> this.valueChange(v.target.className, v.target.value)}/></td>
                        <td><input type='text' className='input weight Fear' value={this.state.weight.Fear} onChange={(v)=> this.valueChange(v.target.className, v.target.value)}/></td>
                        <td><input type='text' className='input weight Aggression' value={this.state.weight.Aggression} onChange={(v)=> this.valueChange(v.target.className, v.target.value)}/></td>
                        <td><input type='text' className='input weight Caution' value={this.state.weight.Caution} onChange={(v)=> this.valueChange(v.target.className, v.target.value)}/></td>
                        {/*<td><input type='text' className='input weight Level' value={this.state.weight.Level} onChange={(v)=> this.valueChange(v.target.className, v.target.value)}/></td>*/}
                    </tr>
                    <tr className="blank_row"/>
{/*                    <tr>
                        <td style={{fontWeight: 'bold'}}>Лин ИИ</td>
                        <td><input disabled type='text' className='input' value={this.state.lin.HP}/></td>
                        <td><input disabled type='text' className='input' value={this.state.lin.Hunger}/></td>
                        <td><input disabled type='text' className='input' value={this.state.lin.Fatigue}/></td>
                        <td><input disabled type='text' className='input' value={this.state.lin.Fear}/></td>
                        <td><input disabled type='text' className='input' value={this.state.lin.Aggression}/></td>
                        <td><input disabled type='text' className='input' value={this.state.lin.Caution}/></td>
                        <td><input disabled type='text' className='input' value={this.state.lin.Level}/></td>
                    </tr>*/}
                    <tr>
                        <td style={{fontWeight: 'bold'}}>Расч. знач.</td>
                        <td><input disabled type='text' className='input' value={this.state.func.HP}/></td>
                        <td><input disabled type='text' className='input' value={this.state.func.Hunger}/></td>
                        <td><input disabled type='text' className='input' value={this.state.func.Fatigue}/></td>
                        <td><input disabled type='text' className='input' value={this.state.func.Fear}/></td>
                        <td><input disabled type='text' className='input' value={this.state.func.Aggression}/></td>
                        <td><input disabled type='text' className='input' value={this.state.func.Caution}/></td>
                        {/*<td><input disabled type='text' className='input' value={this.s/tate.func.Level}/></td>*/}
                    </tr>
                    <tr className="blank_row"/>
                    </tbody>
                </table>

                <table>
                    <thead>
                    <tr>
                        <td colSpan={2}>Вероятность атаки</td>
                    </tr>
                    </thead>
                    <tbody>
{/*                    <tr>
                        <td style={{fontWeight: 'bold'}}>Лин ИИ</td>
                        <td><input disabled type='text' className='input' value={this.state.attack.lin}/></td>
                    </tr>*/}
                    <tr>
                        {/*<td style={{fontWeight: 'bold'}}>Функ ИИ</td>*/}
                        <td><input disabled type='text' className='input' value={this.state.attack.func}/></td>
                    </tr>
                    </tbody>
                </table>
            </div>
			</div>
        )
    }
}