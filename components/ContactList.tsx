import React from 'react'
import {Text, View, FlatList, StyleSheet, SectionList} from 'react-native'

const sections = [{title: 'A', data: ['Ali', 'Ahmad', 'Abdullah'] },
                  {title: 'H', data: ['Hamza', 'Huzaifa', 'Hinfza']}
                  ]
const styles = StyleSheet.create({
container : {
    flex: 1,
    paddingTop:22
    },
sectionTitle:{
    paddingTop:2,
    paddingBottom:2,
    paddingRight: 100,
    backgroundColor: 'rgba(200, 200, 200,1.0)',
    fontWeight: 'bold',
    },
item : {
    padding:10,
    fontSize:18,
    height:44
    }
});

const renderSectionHeader = ({section})=> (<Text style={styles.sectionTitle}>{section.title}</Text>);
const renderItem = ({item}) => (<Text style={styles.item}>{item}</Text>)
const keyExtractor = item=>`key-${item}`

const ContactList = ()=>{
    return(<>
    <SectionList
    sections={sections}
    renderItem={renderItem}
    renderSectionHeader={renderSectionHeader}
    keyExtractor={keyExtractor}
    />
    </>);

};

export default ContactList;