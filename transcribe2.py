import json
import re

# Read data.js
with open("js/data.js", "r", encoding="utf-8") as f:
    text = f.read()

kisi_match = re.search(r'(const kisiKisiData = \[.*?\];)', text, flags=re.DOTALL)
quiz_match = re.search(r'const quizData = (\[.*?\]);$', text, flags=re.DOTALL | re.MULTILINE)

try:
    quizList = json.loads(quiz_match.group(1))
except Exception as e:
    print("Error parsing json:", e)
    exit(1)

def set_q(idx_1based, materi, pert, opsi, kunci, tipe="pg"):
    quizList[idx_1based - 1].update({
        "materi": materi,
        "pertanyaan": pert,
        "opsi": opsi,
        "kunciJawaban": kunci,
        "tipe": tipe
    })

# Q19
set_q(19, "Aqidah", 
"Perhatikan ilustrasi berikut! Manakah yang termasuk perilaku yang mencerminkan iman kepada Qada Qadar?",
[
    "Ketika pak RT. bertanya kepada salah satu warganya yang hanya nongkrong saja mengapa tidak bekerja untuk memenuhi kebutuhannya, jawabnya kalau Allah mentakdirkan kaya, pasti saya sudah kaya, kalau Allah mentakdirkan saya miskin, ya sudah ini nasip saya.",
    "Nia mengikuti ulangan harian mata pelajaran IPS di kelasnya, namun hasilnya kurang menggembirakan, saat di tanya pak guru apakah tidak belajar, jawabnya sambil tersenyum sudah ditakdirkan Allah katanya.",
    "Setiap hari Pak Slamet selalu menaruh Pisang Raja dibawah tempat tidurnya, tak lupa bunga mawar serta beberapa makanan kecil juga ada di samping Pisang Raja, semua dilakukan sebagai bentuk usaha agar baksonya laris manis, rejeki lancar.",
    "Orang palestina yang kehilangan istri dan anaknya, serta rumah dan tokonya di bom, namun ketika di wawancarai media,ia tetap mengucapkan alhamdulillah-alhamdulillah ini sudah di takdirkan Allah Swt"
], 3)

# Q20
set_q(20, "Akhlak", 
"Dalam QS Al Ankabut /29 : 45 Allah SWT berfirman “... Sesungguhnya salat itu mencegah dari (perbuatan) keji dan mungkar ...”<br>Pernyataan yang <i>tidak</i> sesuai dengan ayat tersebut adalah ....",
[
    "Orang yang menjaga salatnya, maka ia telah menegakkan agama Allah Swt., orang yang menegakkan agama Allah maka akan dijaga oleh Allah SWT.",
    "Salat adalah mengingat Allah Swt., orang yang selalu mengingat Allah Swt. tidak akan mau bermaksiat.",
    "Orang yang salat, maka tidak punya kesempatan melaksanakan kegiatan lainnya.",
    "Orang yang tekun dalam salat, hatinya akan lebih cenderung kepada amal saleh."
], 2)

# Q21
set_q(21, "Akhlak",
"Perintah yang diturunkan Allah Swt. kepada nabi Muhammad Saw. adalah perintah membaca. Karena faktanya orang yang banyak membaca akan menjadi orang yang cerdas dan pandai. Apalagi di era kemajuan teknologi seperti sekarang, umat Islam harus cerdas dan bijak dalam membedakan berita-berita yang beredar di dunia maya, sehingga tidak terjerumus dalam ghibah yang akan merugikan kita sendiri baik di dunia maupun akhirat. Cara yang dapat dilakukan untuk membedakan konten/berita yang beredar itu ghibah atau bukan adalah dengan cara ....",
[
    "Dengan memposting ke beberapa grub temannya supaya mendapat informasi lainnya",
    "Memahami efek berita/konten tersebut bermanfaat atau membawa madhorot",
    "Memahami maksud dari beredarnya konten tersebut untuk perbaikan atau menjatuhkan seseorang.",
    "Mengecek sumber berita/konten tersebut apakah bisa dipercaya atau tidak."
], 3)

# Q22
set_q(22, "Akhlak",
"Sebagai makhluk sosial, manusia selalu membutuhkan orang lain. Orang lain di sekitar kita harus diperlakukan secara baik, santun, saling menyayangi, dan menghormati. Berprasangka baik kepada orang lain akan menumbuhkan keharmonisan dalam kehidupan masyarakat. Sikap buruk sangka hanya akan memicu perpecahan dan konflik. Banyak pertikaian dan kerusuhan terjadi karena sikap buruk sangka. Jika ada isu-isu negative hendaknya diklarifikasi (tabayyun) terlebih dahulu agar kita tidak terjerumus kepada sikap curiga dan buruk sangka.<br>Orang yang terbiasa berbaik sangka dan mengutamakan tabayyun akan memperoleh manfaat sebagai berikut ....",
[
    "Hidup menjadi lebih harmonis, orang yang baik akan bergaul dengan orang baik, orang yang jujur akan bergaul dengan orang yang jujur dan sebagainya",
    "Jika mengalami kegagalan akan merasa sedih, lebih banyak mengoreksi diri dan kadangkala menyalahkan orang lain",
    "Menjadi pribadi yang banyak berfikir dan terkadang merasa lelah karena keadaan yang tidak mendukungnya",
    "Menjadi pribadi yang punya pendirian kuat, sebab tidak mudah mendapat pengaruh buruk dari orang lain"
], 0)

# Q23
set_q(23, "Akhlak",
"Perhatikan Ilustrasi berikut!<br>Dimas seorang siswa yang berprestasi di kelasnya. Saat guru menerangkan materi pelajaran, Dimas biasanya memperhatikan dengan sungguh-sungguh. Suatu saat dalam proses belajar di kelas Dimas bersenda gurau dengan teman-teman, sehingga ditegur guru. Reaksi Dimas dan teman-temannya ada yang langsung diam dan memperhatikan, ada yang tetap bersendau gurau serta ada yang membantah gurunya. Namun guru tetap menanggapinya dengan sabar.<br>Berdasarkan ilustrasi tersebut, contoh perilaku berbakti kepada guru yang paling tepat dilakukan adalah ....",
[
    "Mengingat nama dan kebaikan gurunya",
    "Memberi hadiah barang berharga kepada guru",
    "Mendengarkan setiap nasehat guru",
    "Sering berkunjung ke rumah gurunya"
], 2)

# Q24
set_q(24, "Akhlak",
"Perhatikan pernyataan berikut!<br>1) Memilih kata-kata yang baik, tidak berkata kotor<br>2) Menatap Iawan bicara berlama-lama<br>3) Menahan diri dari tertawa yang berlebihan<br>4) Menyilangkan kaki dan tangan<br>Dari pernyataan tersebut, yang merupakan tata krama berkomunika lisan yang baik adalah ...",
[
    "1, 2, 3",
    "2, 3, 4",
    "1, 2, 4",
    "2, 3, 5"
], 0)

# Q25
set_q(25, "Akhlak",
"Indah seorang siswi yang pandai, sopan dan selalu menghormati orang lain. Dalam kehidupan sehari-hari, adakalanya Indah juga harus bergaul dengan lawan jenis. Islam tidak melarang bergaul dengan lawan jenis, namun harus memperhatikan rambu-rambu yang mengatur tentang etika pergaulan dengan lawan jenis, berikut ini :<br>a) Menghindari berduaan dengan lawan jenis<br>b) Bila berduaan hanya sebatas teman<br>c) Tidak bersentuhan fisik<br>d) Menjaga pandangan<br>e) Hindari tempat-tempat yang sepi<br>f) Berkomunikasi lewat Watshap<br>g) Menjaga batas intensitas komunikasi.<br>Dari ilustrasi tersehut, manakah yang termasuk rambu-rambu yang mengatur tentang pergaulan dengan lawan jenis?",
[
    "a, b, c, d, dan e",
    "a, c, d, e, dan g",
    "a, c, e, f, dan g",
    "a, b, d, e, dan f"
], 1)

# Q26
set_q(26, "Fiqih",
"Iksan adalah pedagang yang sukses. Ia juga seorang muslim yang taat. Baginya shalat wajib sangat membantunya dalam mengatur kesibukannya dalam berdagang dan beristirahat. Sehingga ia tidak pernah meninggalkan shalat wajibnya, bahkan ia menutup dagangannya saat waktu shalat datang. HaI ini juga ia terapkan kepada karyawannya. Di hari Jumat ia lebih memilih membuka tokonya setelah shalat Jumat usai. Karena ia ingin memaksimalkan ibadah di Sayyidul Ayyam itu.<br>Dari cerita di atas, fungsi shalat Jumat yang tepat adalah ....",
[
    "Melipatgandakan pahala kebaikan.",
    "Membiasakan diri untuk disiplin terhadap waktu.",
    "Berkumpulnya umat Islam dalam masjid merupakan salah satu cara untuk mencari barakah Allah Swt.",
    "Dengan serlng berjamaah di masjid, bisa menambah semangat bekerja kita karena terbiasa melihat orang-orang yang semangat beribadah di masjid."
], 1)

# Q27
set_q(27, "Fiqih",
"Rukhsah adalah keringanan dari Allah Swt. untuk hambaNya dalam melaksanakan ibadah, tujuan diberikan rukhsah ini, agar mudah melaksanakan ibadah tanpa rasa berat.<br>Berikut ini yang <i>bukan</i> termasuk rukhsah adalah ....",
[
    "Melaksanakan shalat jamak qosor saat bepergian",
    "Membayar zakat fïtrah dengan uang",
    "Mengganti puasa bagi orang yang sakit parah saat bulan Ramadhan",
    "Membayar denda bagi jamaah haji yang tidak bisa hadir saat wukuf"
], 3)

# Q28
set_q(28, "Fiqih",
"Salat gerhana dalam fikih Islam dikenal dengan istilah shalat Kusufain yang berarti shalat dua gerhana atau shalat yang dilakukan pada saat terjadi gerhana matahari maupun bulan. Hukum shalat gerhana sunah muakkad (sangat dianjurkan).<br>Di hawah ini ketentuan shalat gerhana yang benar adalah ....",
[
    "Shalat yang dilakukan saat gerhana matahari disebut dengan shalat khusuf, dilakukan berjamaah dengan jumlah rekaat dua, dua kali ruku' pada tiap rekaatnya.",
    "Shalat yang dilakukan saat gerhana bulan disebut dengan shalat khusuf, dilakukan berjamaah dengan jumlah rekaat dua, dua kali ruku' pada tiap rekaatnya",
    "Shalat gerhana bulan dilaksanakan saat terjadi gerhana bulan disebut dengan shalat kusuf, dilakukan berjamaah dengan jumlah rekaat dua. Dengan satu kali ruku' di setiap rekaatnya",
    "Shalat gerhana matahari dilaksanakan saat terjadi gerhana matahari disebut dengan shalat kusuf, dilakukan bejamaah dengan jumlah rekaat dua. Dengan satu kali ruku' di setiap rekaatnya"
], 1)

# Q29
set_q(29, "Fiqih",
"Perhatikan bacaan sujud berikut!<br><br><span class='text-2xl font-bold font-arabic leading-loose text-center block' dir='rtl'>سُبْحَانَ مَنْ لَا يَنَامُ وَلَا يَسْهُو</span><br>Bacaan di atas merupakan salah satu bacaan sujud yang dibaca ketika melaksanakan sujud ....",
[
    "Sujud dalam shalat",
    "Sujud Syukur",
    "Sujud tilawah",
    "Sujud sahwi"
], 3)

# Q30
set_q(30, "Fiqih",
"Riba berasal dari kata dalam bahasa Arab yang berarti lehih atau bertambah. Secara istilah riba berarti tambahan pada harta yang disyaratkan dalam transaksi dari dua pelaku akad dalam tukar menukar antara harta dengan harta. Jika Aisya meminjam uang kepada Siti sebesar Rp.50.000,00 selarna enam bulan, ketika sudah jatuh tempo Aisya mengembalilan uang tersebut sejumlah Rp.55.000,00 dengan suka rela karena merasa berhutang budi dengan Siti. Maka uang Rp.5.000,00 yang ditambahkan Aisya kepada Siti adalah .....",
[
    "Bukan termasuk riba karena tambalan yang diberikan Aisya sebesar Rp.5.000,00 tidak menjadi syarat dalam hutang piutang.",
    "Bukan tertnasuk ribu karena nilai uang Rp.5.000,00 hanya kecil dan tidak mtemberatkan.",
    "Termasuk dalans riba, karena mernberi tanıbahan dalans hutang piutang.",
    "Termasuk riba, Lariena biaıpan tanyan lanja Kip.5.000,00 snentberatkan slans nieruyikan penvinjamını."
], 0)

# Q31
set_q(31, "Fiqih",
"Pak Aodtul atalals seurang pelani nelon, sudah pilulan talrun iak Ablul srieiijalnai proflesinya sebyyai petai melon.Tuhun deni latitit tijalaul denyan lekuio, ladainig nieiiołapat tunting sielintpati, tellatieng juggi rugi. liki pik Ahtltsl ııteinutiri savwals nveksnya Uengan uit lisjisn, hiernjatuals kidiar zikik yarup Ititns dibavur |usk Abiısl'",
[
    "2,5%",
    "5%",
    "10%",
    "20%"
], 2) # Replacing slightly mangled text. Note: 10% for tadah hujan (air hujan).

# Q32
set_q(32, "Fiqih",
"Pak Heri beserta istri akan melaksanakan ibadah haji tahun ini, karena pak Heri dan istrinya mendapatkan kloter awal, maka pak heri dan istrinya melaksanakan umrah dulu baru melaksanakan haji. Tata cara pelaksanaan ibadah haji pak Heri dan istrinya tersebut dinamakan ....",
[
    "Haji Ifrad",
    "Haji Tamattu'",
    "Haji Qiran",
    "Haji Wada'"
], 1)

# Q33
set_q(33, "Fiqih",
"Perhatikan pemyataan berikut!<br>1) Menyiapkan lubang penampung darah<br>2) Menyiapkan ember dan gayung untuk inembersihkan darah<br>3) Hewan yang akan disembelih di hadapkan ke kiblat<br>4) Kaki hewan di pegang kuat-kuat atau diikat<br>5) Leher hewan di letakkan di atas lubang penampung darah<br>6) Hewan yang akan di sembelih di beri inakan sebanyak-banyaknya<br>7) Bemiat menyembelih<br>8) Membaca basmalah, shalawat Nabi, dan takbir<br>9) Arahkan pisau pada bagian Ieher hewan<br>Berdasarkan pernyataan tersebut, yang tennasuk ketentuan tata cara penyembelihan hewan secara tradisional adalah ....",
[
    "1, 2, 3, 4, 5, 6, 7",
    "2, 3, 4, 5, 7, 8, 9",
    "1, 3, 4, 5, 7, 8, 9",
    "2, 3, 5, 6, 7, 8, 9"
], 2)

# Q34
set_q(34, "Fiqih",
"Bu Atika ssorans ihn smda, tielisu sielaliskani smuk lak-laki yank ganlesk dau sseugensasskiiss. |rada hrsl Letujuht ucteish Lrliilnsms issaknya, lrn Alkka mnelaksinakan Akilkuh slespsn Ketentuan whuasi inerihus ....",
[
    "Menyenbelih 2 ckor snpi ksrena be liasr knva rnyn",
    "Mnvyemnelisl I ekior ksishlng yrna mngst yenik",
    "Minyestnielilt 2 Lkor Lamnbinp vins wehis dssis sulat lrerxauid Kiei jxiel",
    "Mienverskxlilı ' rAit kiumnlislit yang kcsil mris lieluns Inexniils klpt kiurnn slagltituyra inili cisijusk"
], 2)

# Q35
set_q(35, "Tarikh",
"Setelah sampai di Madinah, Nabi Muhammad saw. mulai membuat program kerja dan melaksanakannya yaitu membangun masjid, mempersaudarakan antara Muhajirin dan Ansor, dan membuat perjanjian dengan penduduk Madinah. Madinah tidak hanya orang-orang Islam saja yang tinggal, tetapi di sana terdapat pula orang-orang nonmuslim. Agar terjadi hubungan yang harmonis, saling menghormati, toleransi, dan menjaga lingkungan di Madinah, maka harus ada kesepakatan bersama. Piagam inilah yang oleh Ibnu Hisyam disebut sebagai undang-undang dasar negara dan pemerintahan Islam yang pertama. Isinya mencakup, antara lain, perikemanusiaan, keadilan sosial, toleransi beragama, dan gotong royong.<br>Dari kisah tersebut kita dapat mengambil pelajaran dari dakwah Nabi Saw. yaitu ....",
[
    "Pemimpin harus bisa membuat suatu kebijakan di mana seluruh kelompok tidak ada yang tersinggung dan tersakiti.",
    "Hijrah dapat menciptakan Negara dan pemerintahan baru yang lebih baik.",
    "Pemimpin harus bisa mempengaruhi pemikiran masyarakat yang dipimpinnya",
    "Pemimpin yang baik harus memiliki rakyat yang mau mengikuti keputusannya."
], 0)

# Q36
set_q(36, "Tarikh",
"Sepeninggal Rosululloh Saw., kepemimpinan unat Islam digantikan oleh Khulafaur Rosyidiin. Ada 4 kholifah yang Inenggantikan Rosulullah, mereka memıiliki ciri khas dalan sifst dan kepemimpinannya. Salah satu Khlolifah yang terkenal dengan kebījaksanaannya, tegas dalans nrngunibil keputusan urıuk oranp-orang yallk engXan ncnnbayar isLat dnn IxLjnL UaILn pemtulukunn AI Qur'an yanL prrsnsmndalnmn Islam arlalah ....",
[
    "Umar bin Khothob",
    "Abu Bakar As Sidiq",
    "Usman bin AtTan",
    "Ali BinAbi Tholib"
], 1)

# Q37
set_q(37, "Tarikh",
"Paln uass ptuneriutalian lsun Umiavalı, Ilnun ptıuscialnnn sncısgalanul kemajuan yng sangl lsenarvi Sislalı snumya lalinm hlilamg Lrdokleıan yaug nnainnu nelalıiıkau ssnnank okah ulil Inalsh, peiniss lInni prıvnlil tnlinsn ıdan petnvukit inlit. TaLolr trisehui adnluls ....",
[
    "Abu AI-QasiınAblns lhnu Eurnss",
    "Abu AI-Ousinr AI-Ziıhsvi",
    "Ahir Maswn Abdul MlıL hirv Ilalıih",
    "Allı AnirAlsltilliıli Ilıı Syulrsil"
], 1)

# Q38
set_q(38, "Tarikh",
"Sunan Kalijaga merupakan salah satu tokoh Wali Songo yang lahir di Tuban, Jawa Timur, pada pertengahan abad ke-15. Dalam menyebarkan ajaran Islam di Tanah Jawa, Sunan Kalijaga mempunyai pola yang sama dengan guru sekaligus sahabat dekatnya, Sunan Bonang. Dakwah Sunan Kalijaga sangat toleran terhadap budaya lokal, karena tidak ingin menyinggung atau membelokkan langsung keyakinan masyarakat yang telah dianut secara turun temurun. Sunan Kalijaga meyakinkan bahwa adat istiadat dan budaya lamanya, baik yang bersumber dari ajaran Hindu-Budha maupun kepercayaan nenek moyangnya masih bisa digunakan asalkan disisipkan ajaran Islam.<br>Pada artikel tersebut, Sunan Kalijaga menyebarkan Islam di Nusantara dengan menggunakan cara ....",
[
    "Kesenian",
    "Pendidikan",
    "Hubungan sosial",
    "Perdagangan"
], 0)

# Q39
set_q(39, "Fiqih",
"Dalam hüding Fiqiih Liln srngenal -1 imalish, ıilauis suwuhsh It1sLlus idalals pervnris Inu ıln nnnalan jxnna isahil It'ulslnilıt ynu inajils kilis 1Lıil Iun Innmintli jsnxlnttniıysı. tkuikus indalırls Lr-.| uuxlisal Ieısrluı lıscuntli ...",
[
    "Imamn Ilasnlı",
    "lınınu Alaliki",
    "Imasm Syali'i",
    "Iınanı Oıınhli"
], 3)

# Q40
set_q(40, "Tarikh",
"Masjid Al Jabbar adalah salals ssu ısssjld hsm di /aws |hural ynng Lliensıikau pudin Lhisenler 21122.\nMssjs! A) /alısn Ierlaksui LI Lils Haudiup,/isun Ilnsn.\nIndahvya Maısjsd A! laalals nsenginsailksin kii:a Lepadss uslsis ssrs ynng lsıgit ıssılalns. ualnsis Msun ssnll sepoili lniadsa gamnlnr niıssjin AI Inshsr tettselnı Uinsunsskinı",
[
    "Scni arsitck",
    "Seni BııcnAI Qur'an",
    "Scni Laligıa/ī",
    "Scni mnusik IsIsısi"
], 0)

# URAIAN SECTION
set_q(41, "Tarikh", "Masa Rosululloh Saw. masih hidup, Al Qur'an tidak dibukukan, tetapi ditulis di beberapa media yang berbeda-beda seperti batu tulis, pelepah kurma maupun kulit-kulit pohon. Saat kepemimpinan umat Islam digantikan Khulafaur Rosyidin, Al Qur'an 2 kali dibukukan, pada masa kholifah siapakah Al Qur'an itu dibukukan? Jelaskan alasan pembukuannya!", [], "", "uraian")

set_q(42, "Fiqih", "Di dalam Q.S. Al Maidah/5 : 3 Allah menjelaskan secara langsung makanan yang haram dari segi zatnya. Di dalam ayat yang lain juga dijelaskan makanan yang kotor dan menjijikkan juga diharamkan untuk dimakan. Sedangkan ketentuan makanan yang halal juga diatur Allah dalam ayat Al Qur'an dan Hadis. Jelaskan jenis-jenis makanan yang halal dari segi wujudnya yang sudah Allah jelaskan dalam Al Qur'an maupun dijelaskan dalam Hadis!", [], "", "uraian")

set_q(43, "Fiqih", "Penyembelihan yang disyariatkan dalam ajaran Islam adalah penyembelihan yang memenuhi ketentuan-ketentuannya, adapun ketentuan yang harus dipenuhi seorang penyembelih adalah sebagai berikut, sebutkan!", [], "", "uraian")

set_q(45, "Akhlak", "Amanah berasal dari kata dalam bahasa Arab amāntaan yang berarti aman, tenteram, tenang, dan hilang rasa takut. Sementara dalam bahasa Indonesia amanah diartikan sebagai sesuatu yang ditiyipkan kepada orang lain, keamanan dan ketenteraman, dan dapat dipercaya. Allah memerintahkan umat Islam untuk menjaga amanah. Jelaskan tiga cakupan makna amanah yang kamu ketahui beserta contohnya!", [], "", "uraian")


js_content = "const kisiKisiData = " + kisi_match.group(1).split('const kisiKisiData = ')[1] + "\n\n"
js_content += "const quizData = " + json.dumps(quizList, indent=4, ensure_ascii=False) + ";\n"

with open("js/data.js", "w", encoding="utf-8") as f:
    f.write(js_content)

print("Transcription batch 2 (19-45) done!")
