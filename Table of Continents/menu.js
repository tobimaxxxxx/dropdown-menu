var continentCountrystatecityinfo = {
    Australia: {
        "Australia": {
            Tasmania : [ "Launceston", "Hobart", "Devonport", "Burnie", "Ulverstone",  ],
            Queensland : [ "Brisbane", "Gold Coast", "Toowoomba", "Mackay", "Cairns" ],
            Victoria : [ "Melbourne", "Ballarat", "Geelong", "Bendigo", "Mildura" ],
            Western_Australia : [ "Perth", "Bunbury", "Busselton", "Albany", "Kalgoorie" ],
            South_Australia: [ "Adelaide", "Whyalla", "Ceduna", "Victor Harbor", "Agery" ]
        },
    },
    Africa: {
        "Nigeria" : {
            Lagos : [ "Ikeja", "Epe", "Ikorodu", "Lekki", "Lagos Island"],
            Plateau : ["Jos", "Langtang", "Pankshin", "Bokkos", "Mangu"],
            Ogun : ["Abeokuta", "Ilaro", "Sagamu", "Ipera", "Ifo"],
            Enugu : [ "Enugu", "Ngwo", "Nsukka", "Abor", "Udi"],
            Ondo : [ "Akure", "Odigbo", "Irele", "Owo", "Ipogun"]
        },

        "South Africa": {
            Gauteng : [ "Johannesburg", "Pretoria", "Westonaria", "Brakpan", "Nigel" ],
            Limpopo : [ "Polokwane", "Tzaneen", "Mokopane", "Modimolle", "Lephalale" ],
            Mpumalanga : [ "Lydenburg", "Mbombela", "Delmas", "Belfast", "Komatipoort" ],
            Free_State : ["Bloemfontein", "Winburg", "Welkom", "Clocolan", "Brandfort"],
            Kwazulu_Natal : ["Durban", "Ulundi", "Kokstad", "Ixopo", "Clermont"]
        },
        "Congo" : {
            Kinshasa : [ "Ngaba", "Kisenso", "Limete", "Bumbu", "Selembao" ],
            Kwango : [ "Feshi", "Kahemba", "Kasongo Lunda", "Kenge", "Popokabaka" ],
            Kwilu : [ "Bandundu", "Kikwit", "Bulungu", "Gungu", "Mangai" ],
            Kongo_Central : [ "Matadi", "Boma", "Muanda", "Tshela", "Kasangulu" ],
            Sankuru : [ "Lusambo", "Lodja", "Lubefu", "Kole", "Omeonga" ]
        },
        "Zambia" : {
            Copperbelt : [ "Kitwe", "Ndola", "Mufulira", "Chingola", "Luanshya" ],
            Lusaka : [ "Balmoral", "Bunga", "Catchya", "Chikoko", "Buckleys" ],
            Muchinga : [ "Isoka", "Chama", "Nakonde", "Chinsali", "Muyombe" ],
            Luapula : [ "Mansa", "Nchelenge", "Samfya", "Kafulwe", "Mbereshi" ],    
            Solwezi : [ "Kipushi", "Kasembe", "Likasi", "Chililabombwe", "Kambove" ]
        },
        "Cote d'Ivoire" : {
            Lagunes : [ "Dabou", "Ousrou", "Akoupe", "Agboville", "Affery" ],
            Zanzan : [ "Pana", "Nota", "Noka", "Nzere", "Pomire" ],
            Savanes : [ "Borgu", "Cinsakke", "Dapango", "Boumbouaka", "Loko" ],
            Montagnes : [ "Dio", "Douatouo", "Dopleu", "Dieta", "Doleu" ],
            Abidjan : [ "Abidjan", "Abobo", "Adjame", "Koumassi", "Yopougon" ]
        }
    },
    Europe: {
        "Portugal" : {
            Algarve : [ "Faro", "Tavira", "Portimão", "Olhão", "Albufeira" ],
            Madeira : [ "Funchal", "Ponta do Sol", "Machico", "Santana", "Porto Moniz" ],
            Braga : ["Guimarães", "Fafe", "Vila Nova de Famalicão", "Barcelos", "Esposende", "Amares" ],
            Porto : [ "Matosinhos", "Vila Nova de Gaia", "Maia", "Gondomar", "Valongo", ],
            Beiras : [ "Mangualde", "Oliveira do Hospital", "Pombal", "Seia", "Tondela" ]
        },
        "Spain" : {
            Catalonia : ["Barcelona", "Girona", "Lleida", "Tarragona", "Badalona", ],
            Valencia : ["Valencia", "Sagunto", "Gandía", "Torrent", "Paterna",],
            Basque : ["Vitoria-Gasteiz", "Bilbao", "Donostia-San Sebastián", "Barakaldo", "Algorta"],
            Murcia : ["Murcia", "Cartagena", "Lorca", "Molina de Segura", "Alcantarilla", ],
            Madrid : ["Alcalá de Henares", "Leganés", "Getafe", "Alcorcón", "Móstoles", ]
        },
        "England" : {
            Greater_London : ["London", "Barking",  "Barnes", "Beckenham", "Brentford", ],
            Greater_Manchester : ["Stockport", "Bolton", "Oldham", "Rochdale", "Salford", ],
            Hampshire : ["Basingstoke", "Winchester", "Southampton", "Portsmouth", "Fareham", ],
            Lincolnshire : ["Lincoln", "Grimsby", "Scunthorpe", "Boston", "Skegness", ],
            Merseyside : ["Liverpool", "Wirral", "St Helens", "Sefton", "Knowsley", ]
        },
        "Italy" : {
            Campania : ["Naples", "Salerno", "Pompeii", "Avellino", "Benevento", ],
            Emilia_Romagna : ["Bologna", "Parma", "Modena", "Sassuolo", "Ferrara", ],
            Friuli_Venezia_Giulia : ["Udine", "Trieste", "Gorizia", "Pordenone", "Monfalcone", ],
            Lazio : ["Rome", "Latina", "Frosinone", "Viterbo", "Rieti", ],
            Liguria : ["Genoa", "La Spezia", "Savona", "Sanremo", "Imperia", ]
        },
        "Belgium" : {
            Bavaria : ["Munich", "Nuremberg", "Regensburg", "Augsburg", "Ingolstadt", ],
            Berlin : ["Mitte", "Charlottenburg-Wilmersdorf", "Friedrichshain-Kreuzberg", "Neukölln", "Pankow" ],
            Bremen : ["Bremen", "Bremerhaven", "Gröpelingen", "Vahr", "Hemelingen" ],
            Hamburg : ["Altona", "Bergedorf", "Eimsbüttel", "Hamburg-Mitte", "Hamburg-Nord" ],
            Saarland : ["Saarbrücken", "Neunkirchen", "Homburg", "Völklingen", "St. Ingbert", ]
        }
    },
    South_America: {
        "Brazil" : {
            Bahia : ["Salvador", "Feira de Santana", "Vitória da Conquista", "Itabuna", "Ilhéus"],
            Ceará : ["Fortaleza", "Caucaia", "Juazeiro do Norte", "Maracanaú", "Sobral"],
            Espírito_Santo : ["Vitória", "Vila Velha", "Serra", "Cariacica", "Linhares" ], 
            Goiás : ["Goiania", "Anapolis", "Goiatuba", "Catalão", "Luziânia"],
            Maranhão : ["São Luís", "Imperatriz", "Caxias", "Timon", "Codó"]
        },
        "Argentina" : {
            Buenos_Aires : ["La Plata", "Mar del Plata", "Bahía Blanca", "San Nicolás de los Arroyos", "Zárate"],
            Catamarca : ["San Fernando del Valle de Catamarca", "Andalgalá", "Belén", "Recreo", "Santa María"],
            Chaco : ["Resistencia", "Barranqueras", "Fontana", "Puerto Tirol", "Puerto Vilelas"],
            Chubut : ["Rawson", "Trelew", "Puerto Madryn", "Comodoro Rivadavia", "Esquel"],
            Córdoba : ["Capital", "Villa Carlos Paz", "Río Cuarto", "Alta Gracia", "Villa María"]
        },
        "Uruguay" : {
            Rivera : ["Mandubí", "Vichadero", "La Pedrera", "Minas de Corrales", "Masoller"],
            Rocha : ["Rocha", "Chuy", "Castillos", "La Paloma", "Lascano" ],
            Salto : ["Salto", "Arroyo Dulce", "Inés Indart", "Paso del Parque", "Gahan"],
            San_José : ["Campbell", "Cupertino", "Los Altos", "Los Gatos", "Milpitas"],
            Soriano : ["Cardona", "Palmitas", "Cañada Nieto", "Villa Soriano", "Mercedes"]
        },
        "Colombia" : {
            Amazonas : ["Manaus", "Tabatinga", "Tefé", "Coari", "Parintins"],
            Antioquia : ["Medellín", "Bello", "Itagüí", "Envigado", "Sabaneta"],
            Arauca : [" Arauca ", " Tame ", " Arauquita ", " Fortul ", " Cravo Norte "],
            Atlántico : ["Baranoa", "Barranquilla", "Campo de la Cruz", "Candelaria", "Galapa"],
            Bolívar : ["Cartagena", "Magangué", "El Carmen de Bolívar", "Turbaná", "Mompox"]
        },
        "Ecuador" : {
            Azuay : [" Cuenca ", " Gualaceo ", " Paute ", " Sigsig ", " Chordeleg "],
            Bolívar : ["Cartagena", "Magangué", "Turbaco", "Arjona", "Mompós",],
            Cañar : ["La Troncal", "Azogues", "El Tambo", "Biblián", "Déleg"],
            Carchi : ["Tulcan" ,"El Angel", "San Gabriel", "Arrayan", "El Chico" ],
            Chimborazo : ["Alausí","chambo","Chunchi","colta","Cumandá"]
        }
    },
    North_America : {    
        "USA" : {
           Washington : ["Seattle", "Olympia", "Tacoma", "Marysville", "Shelton"],
           Florida : ["Miami", "Orlando", "Tampa", "Jacksonville", "Destin"],
           California : ["Los Angeles", "San Fransisco", "San Jose", "Oakland", "Stockton"],
           Texas : ["Houston", "Austin", "Dallas", "San Antonio", "Irving"],
           Michigan : ["Detroit", "Lansing", "Flint", "Bay City", "Warren"]
        },
        "Mexico" : {
            Mexico_State: ["Toluca", "Naucalpan", "Ecatepec de Morelos", "Nezahualcóyotl", "Texcoco"],
            Nuevo_León: ["Monterrey", "San Nicolás de los Garza", "Guadalupe", "Apodaca", "Escobedo"],
            Puebla: ["Puebla City", "Tehuacán", "San Martín Texmelucan", "Cholula", "Atlixco"],
            Quintana_Roo: ["Cancún", "Playa del Carmen", "Chetumal", "Cozumel", "Felipe Carrillo Puerto"],
            Veracruz: ["Veracruz", "Xalapa", "Coatzacoalcos", "Poza Rica de Hidalgo", "Córdoba"],
            Yucatán: ["Mérida", "Progreso", "Izamal", "Valladolid", "Tizimín"]
        },
        "Jamaica" : {
            Clarendon: ["May Pen", "Chapelton", "Lionel Town", "Frankfield", "Mocho"],
            Kingston: ["Kingston", "Port Royal", "Constant Spring", "Half-Way-Tree", "New Kingston"],
            Manchester: ["Mandeville", "Porus", "Christiana", "Mile Gully", "Alligator Pond"],
            Saint_Andrew: ["Half-Way-Tree", "New Kingston", "Papine", "Liguanea", "Red Hills"],
            Saint_Catherine: ["Spanish Town", "Portmore", "Old Harbour", "Linstead", "Bog Walk"]
        },
        "Panama" : {
         Bocas_del_Toro: ["Bocas del Toro", "Changuinola", "Almirante", "Isla Colón", "El Empalme"],
         Chiriquí: ["David", "Boquete", "Dolega", "Gualaca", "San Félix"],
         Coclé: ["Penonomé", "Aguadulce", "Antón", "Natá", "Ola"],
         Colón: ["Colón", "Portobelo", "Gatún", "Sabánitas", "Margarita"],
         Herrera: ["Chitré", "Las Minas", "Los Pozos", "Parita", "Santa María"]
        },
        "Canada" : {
            Alberta: ["Calgary", "Edmonton", "Red Deer", "Lethbridge", "Medicine Hat"],
            Quebec: ["Montreal", "Quebec City", "Laval", "Gatineau", "Sherbrooke"],
            Saskatchewan: ["Saskatoon", "Regina", "Prince Albert", "Moose Jaw", "Swift Current"],
            Yukon: ["Whitehorse", "Dawson City", "Watson Lake", "Haines Junction", "Carcross"],
            Ontario: ["Toronto", "Ottawa", "Mississauga", "Hamilton", "London"]
        }

    }, 
    Asia : {
        "Japan" : {
            Hiroshima: ["Hiroshima", "Fukuyama", "Onomichi", "Mihara", "Higashihiroshima"],

            Hokkaido: ["Sapporo", "Hakodate", "Asahikawa", "Obihiro", "Kushiro"],
            
            Hyogo: ["Kobe", "Himeji", "Akashi", "Nishinomiya", "Amagasaki"],
            
            Ibaraki: ["Mito", "Tsukuba", "Hitachi", "Koga", "Kashima"],
            
            Ishikawa: ["Kanazawa", "Nanao", "Komatsu", "Kaga", "Suzu"]
        },
        "China" : {
            Gansu: ["Lanzhou", "Jiayuguan", "Dunhuang", "Tianshui", "Pingliang"],
            Guangdong: ["Guangzhou", "Shenzhen", "Dongguan", "Foshan", "Zhongshan"],
            Guangxi: ["Nanning", "Liuzhou", "Guilin", "Wuzhou", "Beihai"],
            Guizhou: ["Guiyang", "Zunyi", "Liupanshui", "Anshun", "Kaili"],
            Hainan: ["Haikou", "Sanya", "Wanning", "Danzhou", "Qionghai"]
                    },
        "South Korea" : {
           Chungcheongbuk_do: ["Cheongju", "Chungju", "Jecheon", "Danyang", "Boeun"],
            Chungcheongnam_do: ["Daejeon", "Gongju", "Boryeong", "Nonsan", "Cheonan"],
            Gangwon_do: ["Gangneung", "Chuncheon", "Wonju", "Sokcho", "Yangyang"],
            Gyeonggi_do: ["Seoul", "Incheon", "Suwon", "Goyang", "Bucheon"],
            Gyeongsangbuk_do: ["Daegu", "Andong", "Gyeongju", "Pohang", "Yeongju"]
        },
        "North Korea" : {
            Chagang: ["Kanggye", "Manpo", "Hyesan", "Tongsin", "Usi"],
            North_Hamgyong : ["Chongjin", "Hoeryong", "Kyongsong", "Musan", "Onsong"],
            South_Hamgyong : ["Hamhung", "Sunchon", "Tanchon", "Kumya", "Sinpo"],
            North_Hwanghae : ["Sariwon", "Kaechon", "Haeju", "Kusong", "Songnim"],
            South_Hwanghae : ["Haeju", "Sariwon", "Kaesong", "Songrim", "Yonggwang"]
        },
        "India" : {
            Andhra_Pradesh: ["Visakhapatnam", "Vijayawada", "Guntur", "Tirupati", "Kakinada"],
            Bihar: ["Patna", "Gaya", "Muzaffarpur", "Darbhanga", "Bhagalpur"],
            Gujarat: ["Ahmedabad", "Surat", "Vadodara", "Rajkot", "Bhavnagar"],
            Karnataka: ["Bengaluru", "Mysuru", "Hubballi-Dharwad", "Mangaluru", "Belagavi"],
            Kerala: ["Thiruvananthapuram", "Kochi", "Kozhikode", "Thrissur", "Kollam"]
        }
    },
} 
window.onload = function(){
    const selectContinent = document.getElementById('Continent'),
        selectCountry = document.getElementById('country'),
        selectstate = document.getElementById('state'),
        selectcity = document.getElementById('city'),
        select = document.querySelectorAll('select')


        selectCountry.disabled = true
        selectstate.disabled = true
        selectcity.disabled = true
        
        select.forEach(select => {
            if(select.disabled == true){
                select.style.cursor = "auto"
            }
            else{
                select.style.cursor = "pointer"
            }
        })
        for(let Continent in continentCountrystatecityinfo){
           // console.log(Continent);
           selectContinent.options[selectContinent.options.length] = new Option(Continent, Continent)
        }

        //continent change
        selectContinent.onchange= (e) =>{
            selectCountry.disabled = false
            selectstate.disabled = true
            selectcity.disabled = true

            select.forEach(select => {
                if(select.disabled == true){
                    select.style.cursor = "auto"
                }
                else{
                    select.style.cursor = "pointer"
                }
            })

            selectCountry.length = 1
            selectstate.length = 1
            selectcity.length = 1

            for(let country in continentCountrystatecityinfo[e.target.value]){
               // console.log(country);
                selectCountry.options[selectCountry.options.length] = new Option(country, country)
            }
        }

        //country change
        selectCountry.onchange = (e) =>{
            selectstate.disabled = false
            selectcity.disabled = true
         
            select.forEach(select => {
                if(select.disabled == true){
                    select.style.cursor = "auto"
                }
                else{
                    select.style.cursor = "pointer"
                }
            })
            selectstate.length = 1
            selectcity.length = 1

            for(let state in continentCountrystatecityinfo[selectContinent.value][e.target.value]){
                //console.log(state);
                selectstate.options[selectstate.options.length] = new Option(state, state)
            }
        }
        //state change
        selectstate.onchange = (e) =>{
            selectcity.disabled = false
          
            select.forEach(select => {
                if(select.disabled == true){
                    select.style.cursor = "auto"
                }
                else{
                    select.style.cursor = "pointer"
                }
            })

            selectcity.length = 1

            let city = continentCountrystatecityinfo[selectContinent.value][selectCountry.value][selectcity.value][e.target.value]
            
            for(let i=0; i<city.length; i++){
               selectcity.options[selectcity.options.length] = new Option(state[i], state[i])
            }
        
     }

}
