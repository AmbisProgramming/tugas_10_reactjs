import { Button, Container, Divider, Flag, Grid, GridColumn, Icon, Image, Header, Label } from "semantic-ui-react";

function App() {
  return (
    <div>
      <br></br>
      <br></br>
      <Container textAlign="center">
        <Grid>
          <Grid.Row>
            <Grid.Column>
              <Flag name="id" />
            </Grid.Column>
            <Grid.Column>
              <Icon name="angle left" />
            </Grid.Column>
            <Grid.Column>
              <Icon name="angle right" />
            </Grid.Column>
            <Grid.Column width={9}>
              <div class="ui fluid icon input">
                <input type="text" placeholder="Search..." />
                <i class="star icon"></i>
              </div>
            </Grid.Column>
            <Grid.Column>
              <Image src="https://react.semantic-ui.com/images/avatar/large/patrick.png" size="medium" circular></Image>
            </Grid.Column>
            <GridColumn verticalAlign="middle">
              <Header as="h3">Patrick</Header>
            </GridColumn>
          </Grid.Row>
        </Grid>
      </Container>
      <Divider horizontal>SELAMAT DATANG !!!!!</Divider>
      <Container textAlign="right">
        <Label as="a" color="teal" tag>
          SPORT
        </Label>
      </Container>
      <br></br>
      <br></br>
      <Container textAlign="center">
        <p>
          Ducati tengah menunggu sidang Pengadilan Banding FIM tentang komponen aerodinamis. Andai gugatan para rivalnya diterima, akankah Ducati akan melanjutkan ke CAS(Pengadilan Arbitrase Olahraga) ? Suzuki, Honda, KTM, dan Aprilia
          memprotes penggunaan komponen aero di motor Desmosedici Andrea Dovizioso dan Danilo Petrucci dalam balapan pertama MOTOGP 2019 di Qatar karena dianggap ilegal. Pada prosesnya, Dovizioso tampil sebagai pemenang usai mengalahkan
          Marc Maquez. Keempat tim meyakini, komponen itu memiliki fungsi aerodinamis, dan menghasilkan downforce, yang membantu motor melesat di trek. Semantara Ducati bersikukuh komponen itu cuman untuk mendinginkan ban dan sudah
          disetujui Technical Director sebelum balapan. Pada awalnya, protes keempat tim itu ditolak oleh steward MotoGP sehingga dibawa ke Pengadilan Banding FIM. Sidang itu sendiri akan dilakukan sebelum seri kedua di Argentina pada 29-31
          Maret mendatang. Manajer umum Ducati Gigi Dall'Igna berkukuh tidak ada yang ilegal dengan komponen itu. Namun, seandainya pengadilan mengabulkan gugatan tersebut. Ducati akan mempertimbangkan melanjutkan kasus ini ke CAS. "Di
          dalam federasi derajatnya berakhir di Pengadilan Banding FIM. Anda harus pergi ke CAS, yang adalah pengadilan olahraga tapi di dalam kasus ini Anda keluar dari perimeter FIM," Dall'Igna mengungkapkan kepada MotoGp.com "Saya bahkan
          tidak ingin memikirkan sampai titik ini. Kami sangat yakin bahwa kami tidak melanggar regulasi kok, dan yakin kami tidak melihat adanya alasan mengapa pengadilan bandig bisa memutuskan <br></br>secara berbeda."
        </p>
        <Button color="teal" content="Tambah Tautan Ke List" icon="add" labelPosition="left" />
      </Container>
    </div>
  );
}

export default App;
