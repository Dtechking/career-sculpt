import React, { useState, useRef, useEffect } from 'react';
import './Domain.css'; // Import your CSS file for additional styling

const Domain = () => {
    const [selectedDomain, setSelectedDomain] = useState('');
    const [institutes, setInstitutes] = useState([]);
    const selectRef = useRef(null); // Create a ref for the select element

    const instituteData = {
        engineering: [
            { name: "IIT Bombay", ranking: 1, facilities: "World-class labs", link: "https://www.iitb.ac.in/",image:"https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQoYhbTMaUpY3Xh42kbXYfZGrqvdCJ_rmwM7HmPYYBZQLxuXniC8I9IAW3r64N1",location:"https://www.google.com/maps?cid=7565430156140317006" },
            { name: "IIT Delhi", ranking: 2, facilities: "Cutting-edge research facilities", link: "http://www.iitd.ac.in/" ,image:"https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRwpExlMzrIbOBTn7qb1gergofrUkmJ6n0NPAK0_33g0aoTb6hWhj4FM8ruzdjO",location:"https://www.google.com/maps?cid=9349766561031693248"},
            { name: "IIT Madras", ranking: 3, facilities: "Innovative learning environment", link: "https://www.iitm.ac.in/",image:"https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQh_WrsKji_RKSir7--959qL7ZDAUfu-DT3WauMjSTUqUlCRhqVO35egNBYLcCH",location:"https://maps.google.com/?cid=2661387963365499028" },
            { name: "BITS Pilani", ranking: 4, facilities: "State-of-the-art campus", link: "https://www.bits-pilani.ac.in/",image:"https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSX5ZHARTbgjImjXnpRazisWHCn0kLRb8Z_0BBZxrFbPKC5iOVm7v7C9iyMA0CU",location:"https://www.google.com/maps?cid=2286371793580034125" },
            { name: "IISC Bangalore", ranking: 5, facilities: "Interdisciplinary research", link: "https://www.iisc.ac.in/" ,image:"https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSBRffvbJQH__8NnEEFI2mL6SkxV86EMrj7VO9bX-IwSnb8birBLQFYO-SPsR6X",location:"https://www.google.com/maps?cid=4594178927819604287"},
            { name: "IIT Kharagpur", ranking: 6, facilities: "Largest IIT campus", link: "http://www.iitkgp.ac.in/" ,image:"https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQSjbFGB9LVkshC-GeQ9oAjFB8Dvj_Q5cQrSceFlyAQOZE3-8SO6Tm3R1C3SH3c",location:"https://www.google.com/maps?cid=8434823392415671173"},
            { name: "NIT Trichy", ranking: 7, facilities: "Excellent infrastructure", link: "https://www.nitt.edu/" ,image:"https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTDjkO14l6RRu5bKciQ7yHrXoaK04xKTmjAlBaa4r4ln-XlTyOe8tEDNbyV1JYj",location:"https://maps.google.com/?cid=810109415413428314"},
            { name: "IIT Roorkee", ranking: 8, facilities: "Leading research institution", link: "https://www.iitr.ac.in/",image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEeL_-GRJMbQlEb0h2M4zoggz-es_rcWAJxqibKwE8bA-KJ8lrGs98vY22YbEl",location:"https://www.google.com/maps?cid=2820613653233473178" },
            { name: "VIT Vellore", ranking: 9, facilities: "Modern infrastructure", link: "https://vit.ac.in/",image:"https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcThrJQpU5AWQZ8jPv2TuhRtqkEB0uTS2OcpBAId8_uTnrxyNIpqh12lBl5quYus",location:"https://www.google.com/maps?cid=302830106136775546" },
            { name: "IIIT Hyderabad", ranking: 10, facilities: "Focus on IT research", link: "https://www.iiit.ac.in/",image:"https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTjSIC6ChhwQbp_ebmi9UFPmahrYThmCRHQxVS-zcKtrpRTWazgwMQwUeUDIVgm" ,location:"https://www.google.com/maps?cid=11313860968890414230"},
            { name: "IIT Kanpur", ranking: 11, facilities: "Innovative teaching methods", link: "http://www.iitk.ac.in/",image:"https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQ7TScgcGL9_PRKhQOL9gwPz_5WVIHlcTvv_cs1PjaiSx6UTYhjfNDF6OpeqD_5",location:"https://www.google.com/maps?cid=4250246312689370166" },
            { name: "IIT Guwahati", ranking: 12, facilities: "Research-driven environment", link: "http://www.iitg.ac.in/" ,image:"https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQOYEyCvkdRG5xyYFhQqd-wNGeCjJ7BwJJEPOG-t0yotrIky4OAK3Ht32gV60Fq",location:"https://www.google.com/maps?cid=4933266456611140049"},
            { name: "IIT Ropar", ranking: 13, facilities: "Emerging research hub", link: "http://www.iitrpr.ac.in/" ,image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-88-sSCKJLCPNfbRfqbkbfKFnQb4w3xnK_MxspVVJU3Q-K4dXWF12A2sk9U4v",location:"https://www.google.com/maps?cid=6707762418979552696"},
            { name: "BITS Goa", ranking: 14, facilities: "Scenic campus", link: "https://www.bits-pilani.ac.in/goa/",image:"https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSpL-sR9-JRmnTdAJLjgiuUuVAOry91mJKr3gTLx9bwd3Hn8iUBF5UmgOPbtj-Q",location:"https://www.google.com/maps?cid=5392330684483306048" },
            { name: "NIT Warangal", ranking: 15, facilities: "Renowned for engineering education", link: "https://www.nitw.ac.in/",image:"https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRpo2uy1M29hixzVcyYpVExrN9ARdZLY5u-BAIzAr7bSjp2DuurhCKdOp0o79Ef" ,location:"https://www.google.com/maps?cid=17416197662638600142"},
            { name: "IIT Bhubaneswar", ranking: 16, facilities: "Growing academic excellence", link: "https://www.iitbbs.ac.in/" ,image:"https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRNfOsyzQJX-0c47zsmIqNsGw1XiE6Cv6EryPKPHxfOz1cfLl9quWrVagnJHe9o",location:"https://www.google.com/maps?cid=6218185222241929750"},
            { name: "Anna University",ranking:17, facilities:"Computational Biology Laboratory",link: "https://ceg.annauniv.edu/",image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-9CeQr8r_r380Gez-WK2khXfs5zW8uCxJaQ&usqp=CAU",location:"https://www.google.com/maps?cid=10891918181086644302"},
            { name: "IIEST Shibpur", ranking: 18, facilities: "Heritage of engineering education", link: "https://www.iiests.ac.in/",image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQUJFREkr1PBWNgLPL3xiNCQBEcHZzrOsHWuLbA9MBVN3EG7zTA5hYQ81EVn0q" ,location:"https://www.google.com/maps?cid=11511992988336251347"},
            { name: "NIT Calicut", ranking: 19, facilities: "Innovative research programs", link: "https://www.nitc.ac.in/" ,image:"https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQ6GNTJ9eI9G72mYVcsAfAUf8_JBUgMRKYjtTjOvpbalTuy37iRSY-7xXHqCO_T",location:"https://www.google.com/maps?cid=13729918198977649260"},
            { name: "IIT Indore", ranking: 20, facilities: "Interdisciplinary academic culture", link: "http://www.iiti.ac.in/",image:"https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcROqJcsJwtSohb4Lty9GoGZX1KB-a0hiN_EJNmqC936UnZWD9NIntV3WsBUiVZx" ,location:"https://www.google.com/maps?cid=8669021048598452587"},
            { name: "VJTI Mumbai", ranking: 21, facilities: "Pioneering technical education", link: "https://www.vjti.ac.in/",image:"https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcS54kLuF6foVDjDmulwnkNq-g9trg4sBkOpULyis4RA_bQITi16pEyQTozfqr5B" ,location:"https://www.google.com/maps?cid=3193078882256069825"}
        ],
        medical: [
            { name: "AIIMS Delhi", ranking: 1, facilities: "Advanced medical research", link: "https://www.aiims.edu/" ,image:"https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRpqXraGMsPWtcqJCiKIUNKe1Ier6b6X0OoK-bYpBz32xco3PiwRfhxkMiefyWJ",location:" https://maps.google.com/?cid=1776456430968134713"},
            { name: "Christian Medical College, Vellore", ranking: 2, facilities: "Top-notch healthcare education", link: "https://www.cmch-vellore.edu/", image:"https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQkmznAPCEzza3kvTAN8Ggzi8tcBsFYAMPI1O0VQgWaZzDJs4aWlwdbp9LBWVGl", location:"https://maps.google.com/?cid=4617300140057696443" },
            { name: "Armed Forces Medical College, Pune", ranking: 3, facilities: "Military medical training", link: "https://www.afmc.nic.in/",image:"https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTo3xdJ_3LKpcON3a-Hnk21z1-xlySTjN9eiHVNslzmWFd2Rl7pnJlmGeirPqwN",location:"https://maps.google.com/?cid=12540402644799432072" },
            { name: "JIPMER Puducherry", ranking: 4, facilities: "Pioneer in medical education", link: "https://www.jipmer.edu.in/" ,image:"https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQA2wZTNnefk3SbEssnvU-qsI2h-gnS4Wg43DkLezeRP_SL6l-utXHpvt1O1qlP",location:"https://maps.google.com/?cid=10016983121143348345"},
            { name: "Maulana Azad Medical College, Delhi", ranking: 5, facilities: "Premier medical institution", link: "https://www.mamc.ac.in/",image:"https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRYiIM2TZYwoUfVRbifY0V6ogC-yEw790KiSMtT23YEmQkMgTnH2GrEUjSG7bmL",location:"https://maps.google.com/?cid=14237636586864396268" },
            { name: "Grant Medical College, Mumbai", ranking: 6, facilities: "Oldest medical college in Maharashtra", link: "https://www.gmcjjh.org/",image:"https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcT0U2P6NemwuOB6g5dsXuX8nz_8u4bDk1sfN-r9pgABSfXAul0xnfFbxhxTLYnw" ,location:"https://maps.google.com/?cid=16253005698375152727"},
            { name: "Kasturba Medical College, Manipal", ranking: 7, facilities: "Global medical education", link: "https://manipal.edu/kmc-manipal.html",image:"https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQVILml_mY8xl5H_Kk14xeC8a9zfwka82Md53At1k3uY-e_9OWrvyX_Ss0qwMAf" ,location:"https://maps.google.com/?cid=3287873946462308297"},
            { name: "King George's Medical University, Lucknow", ranking: 8, facilities: "Medical and healthcare research", link: "http://www.kgmu.org/",image:"https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSZVFHXIyOF3ud-drlXoWjF09i44CH9k7f-orIbSGINjEzXNXg2QaFhj501ByD7",location:"https://maps.google.com/?cid=11075679098169063399" },
            { name: "Amrita Institute of Medical Sciences, Kochi", ranking: 9, facilities: "Cutting-edge healthcare facilities", link: "https://www.amrita.edu/campus/kochi/medical",image:"https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQ4JsgbMevED91Hezq3v2OZyL-Xi6DmTtxnz9d6ez4Rv-7Jal9DmI5OO7tHvg-s",location:"https://maps.google.com/?cid=4581342456816226210" },
            { name: "Seth GS Medical College, Mumbai", ranking: 10, facilities: "Leadership in medical education", link: "http://www.kem.edu/" ,image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2lY7mj3KTbSihKvIwAaawWY8C-ISIBG68jszw89H0vddpyWe7Y-Da67mfNcTY",location:"https://maps.google.com/?cid=10659646948549298403"},
            { name: "Johns Hopkins University School of Medicine", ranking: 11, facilities: "Cutting-edge medical research", link: "https://www.hopkinsmedicine.org/som/",image:"https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQQJYAOSDnQmJDMgz6VOYo2cH1ATMa_Brur2dMNChbf7ooEyorKhrxgHrP8aTFW",location:"https://www.google.com/maps?cid=3630785733673284119" },
            { name: "Mayo Clinic Alix School of Medicine", ranking: 12, facilities: "Patient-centered medical education", link: "https://college.mayo.edu/academics/md-program/",image:"https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTq1EEubqg0j_8BB34OFrP7MjyjKwz_89evApe54Q7RhfcxhQTxusBryAmxe0Sk",location:"https://maps.google.com/?cid=4869098232265029299" },
            { name: "Harvard Medical School", ranking: 13, facilities: "Leadership in medical education", link: "https://hms.harvard.edu/" ,image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRO7RQQdugH7lWS8dWddY7YQIESsnjSbHy20pupaNXlT1wd8dtzL5TtueWGIlSg",location:"https://www.google.com/maps/place/Harvard+University,+Boston+Campus/@42.335626,-71.104552,17z/data=!3m1!5s0x89e379895513e20d:0xb4a2e03a23e874b4!4m14!1m7!3m6!1s0x89e3798966612a0b:0xccc06bd25d6986e1!2sHarvard+Medical+School!8m2!3d42.3356451!4d-71.104215!16zL20vMDF3cWc4!3m5!1s0x89e3798c0885ae07:0xb7ee6cfac0c45de3!8m2!3d42.336902!4d-71.1034769!16s%2Fg%2F11hds1cb4g?hl=en-GB&entry=ttu"},
            { name: "Johns Hopkins Bloomberg School of Public Health", ranking: 14, facilities: "Public health research and education", link: "https://www.jhsph.edu/", image:"data:image/png;base64,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",
                location:"https://www.google.com/maps?q=Johns+Hopkins+Bloomberg+School+of+Public+Health&bih=730&biw=1536&rlz=1C1CHBF_enIN1042IN1042&hl=en-GB&um=1&ie=UTF-8&sa=X&ved=2ahUKEwibgvTOyNWCAxXdpVYBHUbpBxwQ_AUoBXoECAQQBw" },
            { name: "Cleveland Clinic Lerner College of Medicine", ranking: 15, facilities: "Innovative curriculum", link: "https://portals.clevelandclinic.org/llcme/Home/",image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTx1GBId9DHnYapKUBfcb4ByXUuyi5iP1YOgQ&usqp=CAU" ,location:"https://maps.google.com/?cid=13050211155936412895"},
            { name: "Perelman School of Medicine at the University of Pennsylvania", ranking: 16, facilities: "Biomedical research and education", link: "https://www.med.upenn.edu/",image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3AgwSDTmdci1KKM8X6npbPfsrjxYWwUAA4SSbG7XlAAGGUWCSNeWO0lPSWr7e",location:"https://maps.google.com/?cid=616805589351645876" },
            { name: "Stanford University School of Medicine", ranking: 17, facilities: "Advancing biomedical research", link: "http://med.stanford.edu/" ,image:"https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQqV7kCWtKNx_kXvHHAe_tF6tAIKAp4zqUQttBET58l_-iUctb6PphBnAEyD6WZ",location:"https://www.google.com/maps?cid=2923355163019282447"},
            { name: "University of California, San Francisco (UCSF) School of Medicine", ranking: 18, facilities: "Leading medical institution", link: "https://medschool.ucsf.edu/",image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyDNe1KgoeVukT2LxyBQivGkM8f-hNYmtHQjvwbx9LTvJsRtbX9k2NdUHiYX4n",location:"https://www.google.com/mymaps/viewer?mid=1CT4e7Ate6oBjAM6u2YETyQ90HRM&hl=en_US" },
            { name: "Columbia University Vagelos College of Physicians and Surgeons", ranking: 19, facilities: "Physician-scientist training", link: "https://www.ps.columbia.edu/",image:"https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRjg9Bc8POi2-Y8V_fmOpuOx-095HZks5N58TAp9L_AZX3ZrHzMxCWTR2GTvx63",location:"https://maps.google.com/?cid=10672169075707283178" },
            { name: "University of Chicago Pritzker School of Medicine", ranking: 20, facilities: "Interdisciplinary medical education", link: "https://pritzker.uchicago.edu/",image:"https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRpQmdAWAakEgZ1PmOD4d0Z_2vMRwd7PNKZSjsInRBmpjsQbu8HdrJIl0luWQ7d",location:"https://www.google.com/maps?cid=3462539528140858079" },
        ],
        business: [
            { name: "IIM Ahmedabad", ranking: 1, facilities: "Top-notch faculty", link: "https://www.iima.ac.in/",image:"https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSb7rNZtboD9sdUYs4roIaaRc1JcOy-KsEFEABn6b4r978WdH7PP5YcpEg5upCa",location:"https://www.google.com/maps?cid=1776456430968134713" },
            { name: "IIM Bangalore", ranking: 2, facilities: "Innovative business education", link: "https://www.iimb.ac.in/",image:"https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQc9hG_ObvcMrjbk6T8yV-cSXbwuis4Br0FBJtSWGbB7fJlGu0cF-V6w1XRL7f4",location:"https://maps.google.com/?cid=2719534097905982429" },
            { name: "IIM Calcutta", ranking: 3, facilities: "Excellence in management studies", link: "https://www.iimcal.ac.in/" ,image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuL5djDwuY0st1TaF-r5Z1gXQQoWMxG28MFSqqq_ss8ijJ6dIfo9SqpE1TJApi",location:"https://www.google.com/maps?cid=501464253656104258"},
            { name: "XLRI Jamshedpur", ranking: 4, facilities: "Leadership in human resource management", link: "https://www.xlri.ac.in/",image:"https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQ-Gu7Gfowfs8FjVAqiQ77PwUoS6mNrYJBc3H-Ecwx-_76GVYpz7pr4J7AbkMGa",location:"https://maps.google.com/?cid=6633233354542536639" },
            { name: "ISB Hyderabad", ranking: 5, facilities: "Global business education", link: "https://www.isb.edu/" ,image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNeKkxiaBYnkVinjwhjl9A8bC3S7IKT_R9rOOcyrAYs1DklV95mPCBbrnQrI0J",location:"https://www.google.com/mymaps/viewer?mid=1Kh3Rh1RlTEgU5LjQBnrid9XCNUI&hl=en_US"},
            { name: "SPJIMR Mumbai", ranking: 6, facilities: "Innovative pedagogy", link: "https://www.spjimr.org/",image:"https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRmRpOgPi4VmEhz0r_2aw2_ZggmpqeNFM3Gb8eX18XyF-wtS4Q7ghFszOJ00twq" ,location:"https://maps.google.com/?cid=3166216391558805816"},
            { name: "FMS Delhi", ranking: 7, facilities: "Affordable MBA program", link: "http://fms.edu/",image:"https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSPa3oeNzoPrSop2M-j-77aOKZocDOrv2v1wGeukBX9e5ZzNFCuvO1jvXVrRzPF" ,location:"https://maps.google.com/?cid=14237636586864396268"},
            { name: "IIFT Delhi", ranking: 8, facilities: "Specialization in international business", link: "https://www.iift.edu/",image:"https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRceHdqY7e6CUjgF3AmbDOMUqxI0g0b3GJ3SuQqxcn1mY10-b3ojSHnmAAUZqfA",location:"https://maps.google.com/?cid=11597880698796916812" },
            { name: "NMIMS Mumbai", ranking: 9, facilities: "Diverse range of management programs", link: "https://www.nmims.edu/",image:"https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQgTLZoiojT-jZ9ZGqv4fQ3l916qqm0iMZQamOHVtlprTgXLt_Fpo86cSRCI2uQ",location:"https://maps.google.com/?cid=3192959899237437736" },
            { name: "SIBM Pune", ranking: 10, facilities: "Specialized MBA courses", link: "https://www.sibmpune.edu.in/" ,image:"https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTXvfpyQb_GdCLJrO2ye-9ALKNK4Ps64LflzFl7g_9y4BfgUNZBjrxykTeZmUhb",location:"https://www.google.com/maps?cid=11583333747424138160"},
            { name: "Harvard Business School", ranking: 11, facilities: "Leadership in business education", link: "https://www.hbs.edu/",image:"https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRDHuTNiYXn7ICVv3p8PcLZ6ED-Pp4DtQGOwANMxCjrSvn6gE4MCCgY2p5dwIno",location:"https://www.google.com/mymaps/viewer?mid=1Q2s1iV8ckevGRg7zIMo1EZKOrmo&hl=en_US" },
            { name: "Stanford Graduate School of Business", ranking: 12, facilities: "Innovative MBA programs", link: "https://www.gsb.stanford.edu/" ,image:"https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcS_c2aOkUnT8pN_ONou7PVv5vOnxzhQcsqce0gzMEH7EPhRkOpvrXJeXFlizBSR",location:"https://maps.google.com/?cid=11663806035896341585"},
            { name: "The Wharton School, University of Pennsylvania", ranking: 13, facilities: "Top-ranked business school", link: "https://www.wharton.upenn.edu/",image:"https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTLcE39pgwf9mdNz7-B_grc_tRHxGTxz1cEdLCtP--OVy-EFuvn-2SGBHUUpLKJ",location:"https://maps.google.com/?cid=10335465254284423076" },
            { name: "INSEAD", ranking: 14, facilities: "Global business education", link: "https://www.insead.edu/" ,image:"https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSC6VAfojrDDYtILKNmkQM3XHyi6OC_Xd_JNOnIz8kMpB3YUZhQK-HEEM-Ji6ue",location:"https://www.google.com/maps?cid=5014604273403775583"},
            { name: "London Business School", ranking: 15, facilities: "International business programs", link: "https://www.london.edu/",image:"https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSlt4KaZysSQDxj9z4HxaXsFMMhxGl_FHxMizBU1bBIYgljjueSHz7NsdrPyr9x",location:"https://www.google.com/maps?cid=13807001755875768099" },
            { name: "MIT Sloan School of Management", ranking: 16, facilities: "Innovation in management education", link: "https://mitsloan.mit.edu/" ,image:"https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQuCkXlw4LTMUWRyzVJKwfDrHuO5kMxky-5mY9XlS-bURmP8LKElKvZIcKxfSz9",location:"https://maps.google.com/?cid=11226753057592420986"},
            { name: "Kellogg School of Management, Northwestern University", ranking: 17, facilities: "Experiential learning opportunities", link: "https://www.kellogg.northwestern.edu/",image:"https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTGe-x4HrMbEWP8LwkWoZEwB86TMJnLgZrqmKh7JH6wiNxEKGSVrXh5aPzcwl2Y" ,location:"https://www.google.com/maps?cid=11166647698180954237"},
            { name: "Columbia Business School", ranking: 18, facilities: "Leadership development programs", link: "https://www8.gsb.columbia.edu/",image:"https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRaJ0uAWvGjoC-cUi8cl4n1b_g9uMxonS3e9OAENxa1z9XtnzSR70q9SpHRDT7Y" ,location:"https://www.google.com/maps?cid=7097979746284234702"},
            { name: "Chicago Booth School of Business", ranking: 19, facilities: "Economic and business research", link: "https://www.chicagobooth.edu/",image:"https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRwCL6LaJ7ATXyFw7uva2oY0Y5LP3TVxB7MftDcyCcx8QDS7IfpJHRiYSjJGcvL",location:"https://www.google.com/maps?cid=13777796473953662488" },
            { name: "UC Berkeley Haas School of Business", ranking: 20, facilities: "Entrepreneurship and innovation", link: "https://haas.berkeley.edu/",image:"https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcR45KjrtZCjVkzEM5KV-rkELNsfLFQtF7zv-UEYYNrPEsGZqN70B7QAZ5mbAFfF",location:"https://www.google.com/mymaps/viewer?mid=1FfKRjXz9alAVcNMVZsksRjx_n64&hl=en" },
        ],
    };

    const displayInstitutes = () => {
        setInstitutes(instituteData[selectedDomain] || []);
    };

    const openSelectDropdown = () => {
        // Click the select element to open the dropdown
        selectRef.current.click();
    };

    // Call displayInstitutes when the component mounts
    useEffect(() => {
        displayInstitutes();
    }, [selectedDomain]); // Add selectedDomain as a dependency

    return (
        <div className="container">
          <div className="header">
            <div className="heading-container">
              <h1 className="heading">CAREER SCULPT</h1>
              <div className="heading-line"></div>
            </div>
          </div>
      
          <div className="select-box-container">
            <div className="select-box" onClick={openSelectDropdown}>
              Select Domain
            </div>
            <select
              id="domainSelect"
              ref={selectRef}
              onChange={(e) => {
                setSelectedDomain(e.target.value);
                // Remove this line to trigger displayInstitutes when the component mounts
                // displayInstitutes();
              }}
              className="select"
              value={selectedDomain}
            >
              <option value="" disabled style={{ color: '#555', fontStyle: 'italic' }}>
                Select...
              </option>
              <option value="engineering" style={{ color: '#333' }}>
                Engineering
              </option>
              <option value="medical" style={{ color: '#333' }}>
                Medical
              </option>
              <option value="business" style={{ color: '#333' }}>
                Business
              </option>
            </select>
          </div>
      
          <div
            id="institutes"
            className={`institutes-container ${institutes.length > 0 ? '' : 'hidden'}`}
          >
            {institutes.map((institute, index) => (
              <div key={index} className="institute-box">
                <img
                  src={institute.image} // Replace with the actual image source
                  alt={institute.name}
                  className="institute-image"
                />
                <div className="institute-details">
                  <h3 className="institute-name">{institute.name}</h3>
                  <p className="institute-info">Ranking: {institute.ranking}</p>
                  <p className="institute-info">Facilities: {institute.facilities}</p>
                  <p className="institute-info">
                    Official Link:{' '}
                    <a
                      href={institute.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="institute-link"
                    >
                      {institute.link}
                    </a>
                  </p>
                  {/* Button to open institute location */}
                  <button className="location-button" onClick={() => window.open(institute.location)}>
                    View Location
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      );
      
};

export default Domain;
