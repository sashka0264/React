import React, {Component, useState, PureComponent} from 'react';
import { Header } from 'react-native-elements';
import { StyleSheet, Text, View, TextInput, Button, ListView, ScrollView, Image} from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay';

export default class App extends PureComponent {

  state = {
    timeData: null,
    count: "1",
    base: "RUB",
    baseIcon: "₽",
    baseSubtitle: "Russian ruble",
    inputValue: "",
    data: [],
    loading: true,
    errorLoading: false,
    error: false
  }

  getData = () => {
    // console.log("get Data3")
    fetch(`https://api.exchangeratesapi.io/latest?base=${this.state.base}`)
      .then(res => res.json())
      .then(res => {
        let arr = [];
        for (let key in res.rates) {
          let icon, subtitle;
          switch(key) {
            case "RUB": 
              icon = "₽";
              subtitle = "Russian ruble";
              break;
            case "CAD": 
              icon = "$";
              subtitle = "Canadian Dollar";
              break;
            case "HKD": 
              icon = "$";
              subtitle = "Hong Kong Dollar";
              break;
            case "ISK": 
              icon = "kr";
              subtitle = "Icelandic Krona";
              break;
            case "PHP": 
              icon = "₱";
              subtitle = "Philippine Peso";
              break;
            case "DKK": 
              icon = "kr";
              subtitle = "Danish Krona";
              break;
            case "HUF": 
              icon = "Ft";
              subtitle = "Hungarian Forint";
              break;
            case "CZK": 
              icon = "Kč";
              subtitle = "Czech koruna";
              break;
            default: 
              icon = "-";
              subtitle = "-";
              break;
          }
          arr = [
            ...arr,
            {name: key, value: (res.rates[key]), id: key, icon, subtitle}
          ]
        }
        this.setState({data: arr, errorLoading: false, error: false, loading: false, timeData: res.date.replace(/-/g, ".")})
      })
      .catch(err => {
        this.setState({error: true, errorLoading: false})
      });
  }

  changeInput = (e) => {
    let x = false, 
      res = e.nativeEvent.text.replace(/[^0-9.]/, "").split("");
    res = res.map((item, i) => {
      if ((item === "." || item === ",") && x === true) {
        return "";
      } else if ((item === "." || item === ",") && x === false) {
        x = true;
      }
      return item;
    });
    res = res.join("");
    this.setState({count: res});
  }

  componentDidCatch() {
    this.setState({error: true})
  }

  componentDidMount() {
    if (!this.state.error) {
      this.getData();
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if ((prevState.base !== this.state.base)) {
      this.getData();
    } 
  }

  
  newBase = (item) => {
    this.setState({base: item.name, baseSubtitle: item.subtitle, baseIcon: item.icon, loading: true})
  }

  onErrorButton = () => {
    this.setState({errorLoading: true});
    this.getData();
  }

  render() {
    if (this.state.error) {
      return (
        <View style={styles.error}>
          <Text style={styles.errorText}>{this.state.errorLoading ? "Connecting..." : "Something Wrong"}</Text>
          <Button onPress={this.onErrorButton} color="rgba(235, 65, 162, 1)" title="Try again"/>
        </View>
      );
    }
    return (
      <View style={styles.block}>
        <Header
          centerComponent={{ text: `ECB, ${this.state.timeData}`, style: {color: '#fff'}}}
          containerStyle={{
            backgroundColor: 'rgba(51, 94, 137, 1)',
            justifyContent: 'space-around',
          }}
        />

      

        <View style={styles.baseTotal}>
          <TextInput style={styles.baseValue} 

            keyboardType={"number-pad"}
            onChange={this.changeInput} 
            value={this.state.count}
          />

          <View style={styles.baseBlock}>
            <Text style={styles.baseBlockTitle}>
              {this.state.base + " "}
              <Text style={styles.baseBlockIcon}>{this.state.baseIcon}</Text>
            </Text>

            <Text style={styles.baseBlockSubtitle}>{this.state.baseSubtitle}</Text>
          </View>

        </View>
 
      
        {/* <Button style={styles.button} onPress={() => createToDo(inputValue)} title="Добавить"/> */}
      
        
          <ScrollView style={styles.scrolls}>
            {
              !this.state.loading  ?
              this.state.data.map(item => {
                return (
                  <View key={item.id} style={styles.listTotal} onTouchEnd={() => this.newBase(item)}>
                    <View style={styles.listBlock}>
                      <Text style={styles.listBlockTitle}>
                        {item.name + " "}
                        <Text style={styles.listBlockIcon}>{item.icon}</Text>
                      </Text>
                      <Text style={styles.listBlockSubtitle}>{item.subtitle}</Text>
                    </View>
                    <Text style={styles.listBlockCount}>{(item.value*this.state.count).toFixed(2)}</Text>
                  </View>
                )
              }) :
              <Spinner 
                style={styles.spinner}
                visible={this.state.loading} 
                textStyle={styles.spinnerTextStyle}
                overlayColor="rgba(51, 94, 137, 1)"
                color="white"
              />
            }
          </ScrollView> 
        
      </View>
    );
  }
}



const styles = StyleSheet.create({

  errorText: {
    color: "white",
    marginBottom: 10
  },
  error: {
    flex: 6,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(51, 94, 137, 1)"
  },
  listBlockCount: {
    color: "rgba(235, 65, 162, 1)"
  },  
  scrolls: {
    position: "relative"
  },
  spinnerOverlayColor: {
    color: "white"
  },
  spinnerTextStyle: {
    color: '#FFF'
  },
  listBlockSubtitle: {
    color: "gray",
    fontSize: 15
  },
  listBlockTitle: {
    fontSize: 25
  },
  listBlockIcon: {
    color: "gray",
    paddingLeft: 10
  },
  listTotal: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingLeft: 6,
    paddingRight: 17,
    backgroundColor: "white"
  }, 
  listBlock: {
    backgroundColor: "white",
    padding: 10,
  },
  baseTotal: {
    backgroundColor:'#F8F8F8',
    elevation: 5,
    position:'relative'
  },
  baseBlockTitle: {
    fontSize: 25
  },
  baseBlockIcon: {
    color: "gray",
    paddingLeft: 10
  },
  baseBlockSubtitle: {
    color: "gray",
    fontSize: 15
  },
  baseBlock: {
    backgroundColor: "rgba(232, 234, 255, 1)",
    padding: 10,
    paddingLeft: 17,
    paddingRight: 17
  },
  baseValue: {
    fontSize: 65,
    paddingLeft: 10,
    paddingRight: 10,
    marginTop: 20
  },
  text: {
    marginBottom: 10
  },
  block: {
    fontFamily: "san-serif",
    marginTop: 0,
    width: "100%",
    marginLeft: "auto",
    marginRight: "auto",
    marginBottom: 30
  },
  input: {
    borderStyle: "solid",
    borderWidth: 1,
    padding: 5,
    borderColor: "#a6caf0",
    marginBottom: 10,
    borderRadius: 2
  },
  button: {
    padding: 5
  },
  task: {
    backgroundColor: "gray",
    marginTop: 5,
    padding: 10,
    color: "white",
    borderRadius: 2
  },
  tasks: {
    marginTop: 10
  }
});
