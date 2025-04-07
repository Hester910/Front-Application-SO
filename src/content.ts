export interface F1Item {
  image: string;
  text: string;
  team: string;
}

export const data: F1Item[] = [
  {
    image: 'https://img.band.uol.com.br/image/2024/11/06/nico-hulkenberg-e-gabriel-bortoleto-pilotos-da-sauber-em-2025-101628.jpg',
    text: 'Nico Hulkenberg e Gabriel Bortoleto',
    team: 'Sauber',
  },
  {
    image: 'https://e00-marca.uecdn.es/assets/multimedia/imagenes/2025/03/27/17430886057938.jpg',
    text: 'Max Verstappen e Yuki Tsunoda',
    team: 'Red Bull Racing',
  },
  {
    image: 'https://media.formula1.com/image/upload/t_16by9Centre/f_auto/q_auto/v1739918427/trackside-images/2024/F1_75_Live___Backstage/2200472983.jpg',
    text: 'Charles Leclerc e Lewis Hamilton',
    team: 'Scuderia Ferrari',
  },
  {
    image: 'https://cdn-1.motorsport.com/images/amp/6O1kynO2/s1000/andrea-kimi-antonelli-george-r.jpg',
    text: 'Kimi Antonelli e George Russell',
    team: 'Mercedes AMG F1',
  },
  {
    image: 'https://www.grandepremio.com.br/wp-content/uploads/2024/09/italia-2024-f1-corrida-mclaren-lando-norris-oscar-piastri-afp-02-1200x800.jpg',
    text: 'Lando Norris e Oscar Piastri',
    team: 'McLaren',
  },
  {
    image: 'https://images.daznservices.com/di/library/DAZN_News/bc/42/albon-sainz-f1_1f4s4ecyxb4fg1ir9xf5b0l10o.png?t=115478193&w=800&quality=100',
    text: 'Carlos Sainz e Alex Albon',
    team: 'Williams Racing',
  },
  {
    image: 'https://cdn-7.motorsport.com/images/mgl/0L1y7wJ2/s800/liam-lawson-racing-bulls-isack.jpg',
    text: 'Isack Hadjar e Liam Lawson',
    team: 'Racing Bulls',
  },
  {
    image: 'https://images2.minutemediacdn.com/image/upload/c_crop,w_1638,h_921,x_0,y_296/c_fill,w_720,ar_16:9,f_auto,q_auto,g_auto/images/voltaxMediaLibrary/mmsport/f1briefings/01jmwg42yntc03b8t5dn.jpg',
    text: 'Pierre Gasly e Jack Doohan',
    team: 'Alpine',
  },
  {
    image: 'https://www.planetsport.com/_next/image?url=https%3A%2F%2Fwww.planetsport.com%2Fimage-library%2Fland%2F700%2F1222452_fernando-alonso-and-lance-stroll-of-aston-martin-f1-team.webp&w=3840&q=75',
    text: 'Fernando Alonso e Lance Stroll',
    team: 'Aston Martin',
  },
  {
    image: 'https://www.grandepremio.com.br/cdn-cgi/image/width=1200,height=675,fit=contain,gravity=0.5x0.5,quality=75,format=webp/wp-content/uploads/2025/03/Ocon-e-Bearman-Haas-2025-1.jpg',
    text: 'Esteban Ocon e Oliver Bearman',
    team: 'Haas F1 Team',
  },
];

export const champions = [
  { year: 2005, driver: 'Fernando Alonso', constructor: 'Renault' },
  { year: 2006, driver: 'Fernando Alonso', constructor: 'Renault' },
  { year: 2007, driver: 'Kimi Räikkönen', constructor: 'Ferrari' },
  { year: 2008, driver: 'Lewis Hamilton', constructor: 'Ferrari' },
  { year: 2009, driver: 'Jenson Button', constructor: 'Brawn GP' },
  { year: 2010, driver: 'Sebastian Vettel', constructor: 'Red Bull Racing' },
  { year: 2011, driver: 'Sebastian Vettel', constructor: 'Red Bull Racing' },
  { year: 2012, driver: 'Sebastian Vettel', constructor: 'Red Bull Racing' },
  { year: 2013, driver: 'Sebastian Vettel', constructor: 'Red Bull Racing' },
  { year: 2014, driver: 'Lewis Hamilton', constructor: 'Mercedes' },
  { year: 2015, driver: 'Lewis Hamilton', constructor: 'Mercedes' },
  { year: 2016, driver: 'Nico Rosberg', constructor: 'Mercedes' },
  { year: 2017, driver: 'Lewis Hamilton', constructor: 'Mercedes' },
  { year: 2018, driver: 'Lewis Hamilton', constructor: 'Mercedes' },
  { year: 2019, driver: 'Lewis Hamilton', constructor: 'Mercedes' },
  { year: 2020, driver: 'Lewis Hamilton', constructor: 'Mercedes' },
  { year: 2021, driver: 'Max Verstappen', constructor: 'Mercedes' },
  { year: 2022, driver: 'Max Verstappen', constructor: 'Red Bull Racing' },
  { year: 2023, driver: 'Max Verstappen', constructor: 'Red Bull Racing' },
  { year: 2024, driver: 'Max Verstappen', constructor: 'McLaren' },
];
