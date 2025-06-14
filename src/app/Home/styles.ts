import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d0d2d8',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 35

  },
  logo: { // Imagen
    height: 34,
    width: 134
  },
  form: {
    width: "100%",
    paddingHorizontal: 16,
    gap: 7,
    marginTop: 20
  },
  content: {
    flex: 1,
    width: "100%",
    backgroundColor: "#FFFFFF",
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    padding: 24,
    paddingTop: 32,
    marginTop: 24

  },
  header:{
    width: "100%",
    flexDirection: "row",
    gap: 12,
    borderBottomWidth: 1,
    borderBottomColor:"#E4E6Ec",
    paddingBottom: 12
  },
  clearButtom:{
    marginLeft: "auto"
  },
  clearText:{ //Botão de limpar
    fontSize: 12,
    color: "#828282",
    fontWeight: 600
  },
  separator:{ 
    width: "100%",
    height: 1,
    backgroundColor: "#EEF0F5",
    marginVertical: 16

  },
  listContent:{//Cada linha da flatList
    paddingTop: 24,
    paddingBottom: 62
  },
  empty:{
fontSize: 14,
color: "#808080",
textAlign: "center"
  }
});
