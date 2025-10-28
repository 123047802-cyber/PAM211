import { Text, View, ScrollView, StyleSheet, ImageBackground } from 'react-native';
import React from 'react';

export default function ScrollViewScreen() {
  return (
    <ImageBackground
      source={require('../assets/66.jpeg')}
      style={styles.background}
      imageStyle={styles.image}
    >
      <View style={styles.overlay}>
        <ScrollView
          style={styles.scrollArea}
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={true}
        >
          <Text style={styles.title}>MI LISTA DE ANIMES</Text>

          <Text style={styles.item}>Haikyuu!!</Text>
          <Text style={styles.description}>
            La historia se centra en Shōyō Hinata, un estudiante de baja estatura obsesionado con el voleibol tras ver 
            a un jugador apodado el "Pequeño Gigante". Al unirse al equipo de la Preparatoria Karasuno, se une a su 
            némesis, el talentoso armador Tobio Kageyama. Juntos, reviven el equipo de Karasuno, destacando el crecimiento 
            individual, la estrategia compleja del voleibol y el valor del trabajo en equipo.
          </Text>

          <Text style={styles.item}>Bungo Stray Dogs</Text>
          <Text style={styles.description}>
            El protagonista es Atsushi Nakajima, un joven huérfano que es rescatado por Osamu Dazai, un miembro de la 
            Agencia Armada de Detectives, un grupo con poderes sobrenaturales. El grupo resuelve casos que están más allá 
            de la policía, mientras mantiene una guerra constante contra la temida organización criminal conocida como la Port Mafia.
          </Text>

          <Text style={styles.item}>Your Name</Text>
          <Text style={styles.description}>
            Taki Tachibana y Mitsuha Miyamizu son dos adolescentes que comienzan a intercambiar cuerpos de forma 
            intermitente. Mientras intentan adaptarse a la vida del otro, sus vidas se entrelazan más profundamente, 
            especialmente cuando descubren que su conexión está ligada a un evento catastrófico que los obliga a intentar 
            cambiar el destino y encontrarse a pesar de la distancia temporal y física.
          </Text>

          <Text style={styles.item}>Kaguya-sama: Love Is War</Text>
          <Text style={styles.description}>
            Miyuki Shirogane y Kaguya Shinomiya son los estudiantes más brillantes de la Academia Shūchi'in. Aunque ambos 
            están secretamente enamorados, su orgullo les impide confesarse. La historia se desarrolla como una elaborada 
            batalla psicológica donde cada uno intenta forzar al otro a ser el primero en declarar su amor.
          </Text>

          <Text style={styles.item}>Spy x Family</Text>
          <Text style={styles.description}>
            Para prevenir una guerra, el espía conocido como "Twilight" debe formar una familia falsa: adopta a la telépata 
            Anya y se casa con Yor, quien secretamente es una asesina profesional. Los tres deben vivir juntos ocultando sus 
            verdaderas identidades mientras lidian con los desafíos cotidianos y cumplen su misión de paz.
          </Text>

          <Text style={styles.item}>Death Note</Text>
          <Text style={styles.description}>
            El brillante estudiante Light Yagami encuentra un cuaderno sobrenatural que le permite matar a cualquier persona 
            cuyo nombre escriba en él. Como el vigilante "Kira", busca limpiar el mundo de criminales, lo que lo lleva a un 
            duelo de intelecto y estrategia contra el excéntrico detective conocido como "L".
          </Text>

          <Text style={styles.item}>Attack on Titan</Text>
          <Text style={styles.description}>
            La humanidad vive dentro de inmensos muros para protegerse de los Titanes, gigantes humanoides que devoran 
            personas. La historia sigue a Eren Jaeger, Mikasa Ackerman y Armin Arlert, quienes se unen al Cuerpo de 
            Exploración para luchar por la supervivencia y descubrir los secretos detrás de los Titanes y los muros.
          </Text>

          <Text style={styles.item}>One-Punch Man</Text>
          <Text style={styles.description}>
            Saitama es un héroe tan fuerte que puede derrotar a cualquier enemigo de un solo puñetazo, lo que ha hecho que 
            su vida se vuelva aburrida. Buscando un oponente digno, se une a la Asociación de Héroes con su discípulo cyborg, 
            Genos. La serie es una sátira del género de superhéroes llena de acción y humor.
          </Text>

          <Text style={styles.item}>Fullmetal Alchemist: Brotherhood</Text>
          <Text style={styles.description}>
            Los hermanos Edward y Alphonse Elric intentan revivir a su madre usando alquimia prohibida. Esto resulta en que 
            Edward pierda extremidades y Alphonse todo su cuerpo. Buscan la Piedra Filosofal para restaurar sus cuerpos, 
            enfrentándose a conspiraciones, homúnculos y el oscuro pasado de su nación.
          </Text>

          <Text style={styles.item}>Jujutsu Kaisen</Text>
          <Text style={styles.description}>
            Yuji Itadori es un estudiante con una fuerza impresionante que se convierte en el recipiente de una maldición 
            poderosa, Sukuna. Para evitar ser ejecutado, se une a la escuela de hechiceros de Jujutsu, donde aprende a 
            controlar su poder y luchar contra las fuerzas sobrenaturales que amenazan a la humanidad.
          </Text>

          <Text style={styles.item}>Cowboy Bebop</Text>
          <Text style={styles.description}>
            La serie sigue a un grupo de cazarrecompensas espaciales a bordo de la nave Bebop: Spike Spiegel, Jet Black, 
            Faye Valentine, Ed y un perro llamado Ein. Cada episodio mezcla acción, jazz, humor y drama mientras los 
            personajes enfrentan su pasado en un universo melancólico y futurista.
          </Text>

          <Text style={styles.item}>Code Geass: Lelouch of the Rebellion</Text>
          <Text style={styles.description}>
            Lelouch Lamperouge, un príncipe exiliado, obtiene un poder llamado Geass, que le permite dar órdenes absolutas 
            a cualquier persona. Bajo la identidad del vigilante Zero, lidera una rebelión contra el Imperio de Britania 
            usando su intelecto y estrategias militares para vengar a su madre y crear un mundo pacífico.
          </Text>

          <Text style={styles.item}>Hunter x Hunter</Text>
          <Text style={styles.description}>
            Gon Freecss decide convertirse en Cazador para encontrar a su padre. En su viaje conoce a Kurapika, Leorio y 
            Killua, enfrentando desafíos en un mundo lleno de peligros y poderes conocidos como Nen. Es una historia sobre 
            amistad, crecimiento y superación.
          </Text>

          <Text style={styles.item}>Steins;Gate</Text>
          <Text style={styles.description}>
            Rintarou Okabe y sus amigos descubren accidentalmente cómo enviar mensajes al pasado usando un microondas. 
            Sus experimentos alteran el presente, atrayendo la atención de una organización secreta. Okabe debe viajar 
            entre líneas temporales para evitar una catástrofe global y salvar a sus amigos.
          </Text>

          <Text style={styles.item}>Re:Zero - Starting Life in Another World</Text>
          <Text style={styles.description}>
            Subaru Natsuki es transportado a un mundo de fantasía donde descubre que puede "Regresar de la Muerte". 
            Revive repetidamente los mismos eventos para proteger a sus amigos, especialmente a Emilia, enfrentando 
            dolor y desesperación en un ciclo sin fin.
          </Text>

          <Text style={styles.item}>The Promised Neverland</Text>
          <Text style={styles.description}>
            En un orfanato aparentemente perfecto, los niños viven felices hasta que Emma, Norman y Ray descubren que 
            son criados como alimento para demonios. Juntos, idean un plan arriesgado para escapar y salvar a todos los niños.
          </Text>

          <Text style={styles.item}>The Disastrous Life of Saiki K.</Text>
          <Text style={styles.description}>
            Kusuo Saiki es un estudiante con habilidades psíquicas que solo desea una vida normal. Sin embargo, sus excéntricos 
            compañeros y las situaciones absurdas lo obligan a usar sus poderes constantemente, generando comedia y caos.
          </Text>

          <Text style={styles.item}>Gintama</Text>
          <Text style={styles.description}>
            Ambientada en un Japón invadido por alienígenas llamados Amanto, sigue a Gintoki Sakata, un excéntrico exsamurái 
            que acepta trabajos de todo tipo. Mezcla comedia absurda, parodias y momentos de acción épica y drama.
          </Text>

          <Text style={styles.item}>Parasyte: The Maxim</Text>
          <Text style={styles.description}>
            Seres alienígenas llamados Parásitos invaden la Tierra tomando el control de los humanos. Shinichi Izumi logra 
            evitar que uno controle su cerebro, quedando su mano infectada. Junto a su parásito Migi, lucha por sobrevivir 
            y mantener su humanidad.
          </Text>

          <Text style={styles.item}>Mob Psycho 100</Text>
          <Text style={styles.description}>
            Shigeo "Mob" Kageyama es un adolescente con inmensos poderes psíquicos que trabaja con un falso médium. 
            Mientras aprende a controlar sus emociones y su poder, enfrenta amenazas sobrenaturales y lucha por entender 
            su identidad.
          </Text>
        </ScrollView>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  image: {
    resizeMode: 'cover',
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(255, 255, 255, 0.39)',
  },
  scrollArea: {
    flex: 1,
  },
  scrollContent: {
    alignItems: 'center',
    paddingVertical: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#53094dff',
    marginBottom: 30,
  },
  item: {
    backgroundColor: '#500258ff',
    color: '#ffffffff',
    padding: 12,
    marginVertical: 12,
    borderRadius: 8,
    textAlign: 'center',
    width: '90%',
    fontSize: 18,
    fontWeight: 'bold',
  },
  description: {
    marginTop: 6,
    marginBottom: 18,
    textAlign: 'justify',
    color: '#333',
    width: '90%',
  },
});

