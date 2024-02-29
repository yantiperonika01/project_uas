import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { PostProvider } from '../../providers/post-provider';
@Component({
 selector: 'app-tab2',
 templateUrl: 'tab2.page.html',
 styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {
 id: string = '';
 nama_lengkap: string = '';
 tanggal_lahir: string = '';
 jenis_kelamin: string = '';
 alamat: string = '';
 no_telp: string = '';
 email: string = '';
 riwayat_penyakit: string = '';
 constructor(
 private router: Router,
 public toastController: ToastController,
 private postPvdr: PostProvider,
 ) {

 }
 ngOnInit() {
 }
 async addRegister() {
 if (this.id == '') {
 const toast = await this.toastController.create({
 message: 'Id harus di isi',
 duration: 2000
 });
 toast.present();
 } else if (this.nama_lengkap == '') {
 const toast = await this.toastController.create({
 message: 'Nama lengkap harus di isi',
 duration: 2000
 });
 toast.present();
 } else if (this.tanggal_lahir == '') {
 const toast = await this.toastController.create({
 message: 'tanggal lahir harus di isi',
 duration: 2000
 });
 toast.present();
 } else if (this.jenis_kelamin == '') {
 const toast = await this.toastController.create({
 message: 'Jenis kelamin harus di isi',
 duration: 2000
 });
 toast.present();
 } else if (this.alamat == '') {
 const toast = await this.toastController.create({
 message: 'Alamat harus di isi',
 duration: 2000
 });
 toast.present();
 } else if (this.no_telp == '') {
 const toast = await this.toastController.create({
 message: 'No HP/WA harus di isi',
 duration: 2000
 });
 toast.present();
 } else if (this.email == '') {
 const toast = await this.toastController.create({
 message: 'Email harus di isi',
 duration: 2000
 });
 toast.present();
 } else if (this.riwayat_penyakit == '') {
 const toast = await this.toastController.create({
  message: 'Riwayat Penyakit harus di isi',
 duration: 2000
 });
 toast.present();
 } else {
 let body = {
 id: this.id,
 nama_lengkap: this.nama_lengkap,
 tanggal_lahir: this.tanggal_lahir,
 jenis_kelamin: this.jenis_kelamin,
 alamat: this.alamat,
 no_telp: this.no_telp,
 email: this.email,
 riwayat_penyakit: this.riwayat_penyakit,
 aksi: 'add_register'
 };
 this.postPvdr.postData(body, 'action.php').subscribe(async data => {
 var alertpesan = data.msg;
 if (data.success) {
 this.router.navigate(['/tab4']);
 const toast = await this.toastController.create({
 message: 'Selamat! Registrasi Pendaftaran Sukses.',
 duration: 2000
 });
 toast.present();
 } else {
 const toast = await this.toastController.create({
 message: alertpesan,
 duration: 2000
 });
}
});
}
}
}