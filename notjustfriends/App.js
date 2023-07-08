import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import {Entypo} from '@expo/vector-icons';

// dummy data
const post = {
  id: "p1",
  createdAt: "19 m",
  User: {
    id: "u1",
    image:
      "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/zuck.jpeg",
    name: "Joshua Alana",
  },
  description:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
  image: "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/images/1.jpg",
  numberOfLikes: 11,
  numberOfShares: 2,
};


export default function App() {
  return (
    <View style={styles.container}>
  
    <View style={styles.post}>
          
          {/* {/HEADER SECTION*  */} 
          
          <View style={styles.header}>
          <Image  
          source={{uri: post.User.image}} 
          style={styles.profileImage}
          />
        
        <View>
          <Text style={styles.name}>{post.User.name}</Text>
          <Text style={styles.subtitle}>{post.createdAt}</Text>
        </View>
              <Entypo name='dots-three-horizontal'
                size={18} 
                color='gray'
                style={styles.icon}
              />
          </View>

          {/* BODY SECTION */}
      
        <Text style={styles.description}>{post.description}</Text>
       
       {post.image && (<Image 
          source={{uri: post.image}}
          style={styles.image}
        />)}
      
      
          {/* FOOTER SECTION */}
      
          <View style={styles.footer}>
              <View style={styles.statRow}>
                <Text style={styles.likedBy}>Joshua and Alana {post.numberOfLikes} Others </Text>
                <Text style={styles.numberOfShares}>{post.numberOfShares} shares</Text>
                </View>
          </View>
   </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  post: {
    width: '100%',
    marginVertical: 10,
    backgroundColor: '#fff',
  },

//Header styles

  header: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },

  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },

  name: {
    fontWeight: '500'
  },

  subtitle: {
    color: 'gray',
  },

  icon: {
    marginLeft: 'auto',
  },

// Body styles
  
  description: {
    paddingHorizontal: 10,
    lineHeight: 20,
    letterSpacing: 0.3,
  },

  image: {
      width: '100%',
      aspectRatios: 1,
      marginTop: 10,  

  },

});
