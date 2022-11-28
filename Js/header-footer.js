class myHeader extends HTMLElement {

    connectedCallback() {

        this.innerHTML = ` 
        <div class="header-nav">
        <!-- Header Logo -->
        <a href="#" class="logo">
            <img src="images/Header/logo.svg" alt="Ecourses Logo">
        </a>
        <!-- Header Navigation Center  -->
        <div class="header-center">
            <!-- Header Categories -->
            <button class="header-categories">Kategoriyalar
                <i class="fa fa-bars"></i>
            </button>
            <!-- Header Search -->
            <form action="#">
                <input type="search" placeholder="Nəyi öyrənmək istəyirsən?">
                <img src="images/Header/searchicon.svg" alt="search-icon">
            </form>
        </div>
        <!-- Header Right: Enter and Register -->
        <div class="header-right">
            <a href="#" class="enter-btn">Daxil Ol</a>
            <a href="#" class="register-btn">Qeydiyyat</a>
        </div>
    </div>`
    }
};

customElements.define('my-header',myHeader);

// Footer
class myFooter extends HTMLElement{
    connectedCallback(){
        
        this.innerHTML=` <div id="footer">
        <!-- Main section on Footer of page -->
        <div id="footer-main">
            <div class="container">
                <!--Top Content of Main section   -->
                <div class="row footer-main-top footer-main-content">
                    <!-- First list On Top Content -->
                    <div class="col-12 col-md-3">
                        <div class="footer-nav-titles">Ən reytinqli kurslar</div>
                        <ul class="footer-nav-list mb-0">
                            <li> <a href="#">Kəskin insultun menecmenti. Modul #4.</a></li>
                            <li> <a href="#">Ağır COVİD19 xəstələrinin menecmenti</a></li>
                            <li> <a href="#"> COVİD19 xəstələrində intubasiyanın xüsusiyyətləri</a></li>
                            <li> <a href="#"> Ideal muellim</a></li>
                            <li> <a href="#"> Sinfin idarəedilməsində müəllimin strateji planlaması</a></li>
                            <li> <a href="#"> Təqdimat bacarıqları</a></li>
                        </ul>
                    </div>

                    <!-- Second list On Top Content -->
                    <div class="col-12 col-md-3">
                        <div class="footer-nav-titles">Ən populyar kurslar</div>
                        <ul class="footer-nav-list">
                            <li> <a href="#">Arterial hipertenziyanın diaqnostika və müalicəsi</a></li>
                            <li> <a href="#">COVID-19 və Hamilələr: İnfeksiyon nəzarət və profilaktika</a></li>
                            <li> <a href="#"> Pediatrik COVİD19: İnkefsiyon nəzarət və profikaltikası</a></li>
                            <li> <a href="#">Qeysəriyyə kəsiyi əməliyyatı</a></li>
                            <li> <a href="#">COVID19 infeksiyası və reproduktiv sağlamlıq</a></li>
                            <li> <a href="#"> Pediatrik COVİD19-un menecmenti</a></li>
                        </ul>
                    </div>

                    <!-- Third list On Top Content -->
                    <div class="col-12 col-md-3">
                        <div class="footer-nav-titles">Sertifikatlaşdırılmış kurslar
                        </div>
                        <ul class="footer-nav-list">
                            <li> <a href="#">İnfeksiyaların Menecmenti və Multidissiplinar Yanaşma</a></li>
                            <li> <a href="#">EKQ</a></li>
                            <li> <a href="#"> Mikrobiologiya</a></li>
                            <li> <a href="#">Fiziologiya</a></li>
                            <li> <a href="#"> Pediatrik Otolarinqologiya. Modul 1</a></li>
                            <li> <a href="#"> Insultun Menecmenti və Multidissiplinar yanaşma. Modul 8.İ</a></li>
                        </ul>
                    </div>

                    <!-- Fourth list On Top Content -->
                    <div class="col-12 col-md-3">
                        <div class="footer-nav-titles">Ən son kurslar</div>
                        <ul class="footer-nav-list">
                            <li> <a href="#">Tənəffüsə dəstək strategiyaları</a></li>
                            <li> <a href="#">Reproduktiv sağlamlıq</a></li>
                            <li> <a href="#"> İnfeksiyaların Menecmenti və Multidissiplinar Yanaşma</a></li>
                            <li> <a href="#">EKQ</a></li>
                            <li> <a href="#"> Səhiyyə Menecmenti üzrə Təlim</a></li>
                            <li> <a href="#"> Mikrobiologiya</a></li>
                        </ul>
                    </div>
                </div>
                <!--Bottom Content of Main section   -->
                <div class="row footer-main-bottom footer-main-content">
                    <!-- First col list On Bottom Content -->
                    <div class="col-6 col-md-3">
                        <div class="footer-nav-titles">Mycourses portali</div>
                        <ul class="footer-nav-list">
                            <li> <a href="#">Haqqımızda</a></li>
                            <li> <a href="#">Media mərkəzi</a></li>
                            <li> <a href="#">Təşkilatlar</a></li>
                            <li> <a href="#"> FAQ</a></li>
                            <li> <a href="#"> Qeydiyyat</a></li>
                            <li> <a href="#"> İstifadə qaydaları</a></li>
                            <li> <a href="#"> Məxfilik siyasəti</a></li>
                        </ul>
                        <!-- Social media on Footer-->
                        <ul class=" footer-nav-social">
                            <!-- Facebook icon footer -->
                            <li>
                                <a href="http://" target="_blank">
                                    <i class="fab fa-facebook"></i>
                                </a>
                            </li>
                            <!--Instagram icon footer -->
                            <li>
                                <a href="http://" target="_blank">
                                    <i class="fab fa-instagram"></i>
                                </a>
                            </li>
                            <!-- Youtube icon footer -->
                            <li>
                                <a href="http://" target="_blank">
                                    <i class="fab fa-youtube-square"></i>
                                </a>
                            </li>
                            <!-- Linkedin icon footer -->
                            <li>
                                <a href="http://" target="_blank">
                                    <i class="fab fa-linkedin-in"></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <!-- Second col list On Bottom Content -->
                    <div class="col-6 col-md-3">
                        <div class="footer-nav-titles">Lazımlı keçidlər</div>
                        <ul class="footer-nav-list">
                            <li> <a href="#">Bizimlə əlaqə</a></li>
                            <li> <a href="#">İnstruktorlar</a></li>
                            <li> <a href="#">Developerlər</a></li>
                            <li> <a href="#"> Tərcüməçilər</a></li>
                            <li> <a href="#"> Testerlər</a></li>
                            <li> <a href="#"> Reklam dəstəyi</a></li>
                            <li> <a href="#"> Blog</a></li>
                        </ul>
                    </div>
                    <!-- Third col  On Bottom Content -->
                    <div class="col-6 col-md-2">
                        <!-- Third col -> 1 -->
                        <a href="https://sehiyye.gov.az/">
                            <img width="100%" src="images/Footer/footer-main/Footer-top/third-col-image.png"
                                alt="Sehiyye-Nazirliyi">
                        </a>
                        <!-- Third col -> 2 -->
                        <a href="https://covid19.isim.az/" >
                            <img width="100%" style="margin-top: 20px;" src="images/Footer/footer-main/Footer-top/thirtd-col-2.jpg"
                                alt="KoronoVirus">
                        </a>
                    </div>
                    <!-- Fourth col  On Bottom Content -->
                    <div class="col-6 col-md-2">
                        <a href="https://www.isim.az/">
                            <img width="100%" src="images/Footer/footer-main/Footer-top/fourth-col-image.png"
                                alt="ISIM(Ictimai Sehiyye..)">
                        </a>
                    </div>
                    <!-- Fifth col  On Bottom Content -->
                    <div class="col-6 col-md-2">
                        <a href="https://www.undp.org/azerbaijan">
                            <img width="100%" src="images/Footer/footer-main/Footer-top/fifth-col-image.png"
                                alt="Undp-image">
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <!-- Foot (info) on Footer of page -->
            <div  id="footer-foot" class="container">
                <!-- Footer foot info -->
                <div class="footer-f-info">
                    <p>© 2020 ecourses <span>|</span> Bütün Hüquqlar qorunur</p>
                </div>
                <!-- Footer foot copyrights -->
                <div class="footer-f-copyrights row">
                    <!-- Copyrights first image link -->
                    <div class="col-6">
                        <a href="#" target="_blank" rel="noopener noreferrer">
                            <img src="images/Footer/footer-foot/footer-f-ezgil.png" alt="">
                        </a>
                    </div>
                    <!-- Copyrights second image link -->
                    <div class="col-6">
                        <a href="http://www.propaganda.az/" target="_blank" rel="noopener noreferrer">
                            <img src="images/Footer/footer-foot/footer-f-propaganda.svg"
                                alt="Footer-foot-proboganda">
                        </a>
                    </div>
                </div>
            </div>

    </div>`
    }
}
customElements.define('my-footer',myFooter);