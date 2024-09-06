import { StyleSheet } from 'react-native';

const settingsPageStyles = StyleSheet.create({

    profileContainer: {
        backgroundColor: '#4CAF50',
        padding: 20,
        alignItems: 'center',
      },
      profileImage: {
        width: 80,
        height: 80,
        borderRadius: 40,
        marginBottom: 10,
      },
      profileName: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
      },
      editButton: {
        marginTop: 12,
        paddingVertical: 10,
        paddingHorizontal: 16,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        borderRadius: 12,
      },
      editText: {
        marginRight: 8,
        fontSize: 15,
        fontWeight: '600',
        color: '#FF1D58',
      },

      iconsContainer: {
        flexDirection: 'row',
    justifyContent: 'space-between', 
    paddingHorizontal: '10%',
    marginTop: '10%'
      },

});

export default settingsPageStyles;
