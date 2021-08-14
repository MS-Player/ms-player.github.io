function list_result(json_data) {
    const json_data = [
        {
            "fcltyNm": {
                "_text": "동산사회복지관"
            },
            "rdnmadr": {
                "_text": "전라북도 익산시 동천로7길 26-1"
            },
            "lnmadr": {},
            "operInstitutionNm": {
                "_text": "동산사회복지관"
            },
            "phoneNumber": {
                "_text": "063-842-2253"
            },
            "mlsvPlace": {
                "_text": "동산사회복지관"
            },
            "mlsvTrget": {
                "_text": "결식노인,저소득층"
            },
            "mlsvTime": {
                "_text": "중식(12:00-13:00)"
            },
            "mlsvDate": {
                "_text": "\"금\""
            },
            "operOpenDate": {
                "_text": "2017-01-01"
            },
            "operCloseDate": {
                "_text": "2017-12-31"
            },
            "latitude": {
                "_text": "35.93217035"
            },
            "longitude": {
                "_text": "126.9699914"
            },
            "referenceDate": {
                "_text": "2020-12-22"
            },
            "insttCode": {
                "_text": "6450000"
            }
        },
        {
            "fcltyNm": {
                "_text": "거제시종합사회복지관"
            },
            "rdnmadr": {
                "_text": "경상남도 거제시 양정1길 45(양정동)"
            },
            "lnmadr": {
                "_text": "경상남도 거제시 양정동 208-4"
            },
            "operInstitutionNm": {
                "_text": "거제시희망복지재단"
            },
            "phoneNumber": {
                "_text": "055-636-0303"
            },
            "mlsvPlace": {
                "_text": "거제시종합사회복지관"
            },
            "mlsvTrget": {
                "_text": "만60세이상 노인"
            },
            "mlsvTime": {
                "_text": "중식(11:30~12:20)"
            },
            "mlsvDate": {
                "_text": "\"월,화,수,목,금\""
            },
            "operOpenDate": {},
            "operCloseDate": {},
            "latitude": {
                "_text": "34.86939501"
            },
            "longitude": {
                "_text": "128.6461277"
            },
            "referenceDate": {
                "_text": "2020-07-26"
            },
            "insttCode": {
                "_text": "5370000"
            }
        },
        {
            "fcltyNm": {
                "_text": "관운사가야복지센터"
            },
            "rdnmadr": {
                "_text": "경상북도 성주군 성주읍 경산길 33-1"
            },
            "lnmadr": {
                "_text": "경상북도 성주군 성주읍 경산리 577-4"
            },
            "operInstitutionNm": {
                "_text": "관운사가야복지센터"
            },
            "phoneNumber": {
                "_text": "054-931-3000"
            },
            "mlsvPlace": {
                "_text": "관운사가야복지센터"
            },
            "mlsvTrget": {
                "_text": "60세이상 저소득층 독거노인 및 결식노인"
            },
            "mlsvTime": {
                "_text": "중식(11:30~13:00)"
            },
            "mlsvDate": {
                "_text": "\"월, 금\""
            },
            "operOpenDate": {
                "_text": "2010-01-08"
            },
            "operCloseDate": {},
            "latitude": {
                "_text": "35.9156622"
            },
            "longitude": {
                "_text": "128.2843144"
            },
            "referenceDate": {
                "_text": "2020-07-15"
            },
            "insttCode": {
                "_text": "5210000"
            }
        },
        {
            "fcltyNm": {
                "_text": "이웃과하나노인복지센터"
            },
            "rdnmadr": {
                "_text": "경상북도 성주군 성주읍 예산3길 8-4"
            },
            "lnmadr": {
                "_text": "경상북도 성주군 성주읍 예산리 466"
            },
            "operInstitutionNm": {
                "_text": "이웃과하나노인복지센터"
            },
            "phoneNumber": {
                "_text": "054-931-1611"
            },
            "mlsvPlace": {
                "_text": "이웃과하나노인복지센터"
            },
            "mlsvTrget": {
                "_text": "60세이상 저소득층 독거노인 및 결식노인"
            },
            "mlsvTime": {
                "_text": "중식(12:00~13:00)"
            },
            "mlsvDate": {
                "_text": "\"화, 수\""
            },
            "operOpenDate": {
                "_text": "2004-11-05"
            },
            "operCloseDate": {},
            "latitude": {
                "_text": "35.9244472"
            },
            "longitude": {
                "_text": "128.2859217"
            },
            "referenceDate": {
                "_text": "2020-07-15"
            },
            "insttCode": {
                "_text": "5210000"
            }
        }
    ];

    let latitude = 35.93217099;
    let longitude = 126.9699930;

    let latitude_ok = new Array();
    let longitude_ok = new Array();

    // 위도 처리
    for (cafeteria in json_data) {
        let latitude_cal = latitude - Number(cafeteria.latitude);
        if (Math.ceil(Math.abs(latitude_cal)) <= 10) {
            let latitude_ok = latitude_ok.push(cafeteria)
        }
    };

    //경도 처리
    for (cafeteria in latitude_ok) {
        let longitude_cal = longitude - Number(cafeteria.longitude);
        if (Math.ceil(Math.abs(longitude_cal)) <= 10) {
            let longitude_ok = longitude_ok.push(cafeteria)
        }
    }

    // 리스트 처리
    for (cafeteria in longitude_ok) {
        var obj = document.getElementById("cafeteria_list");
        let lists = document.createElement("div")
        lists.setAttribute = ("class", "cafeteria_list_box");
        lists.innerHTML = '<div class="cafeteria_list_box">'+
            '<span class="cafeteria_name">'+ cafeteria.fcltyNm._text +'</span><br>'+
            '<span class="cafeteria_address">' + cafeteria.rdnmadr._text + '</span><br><br>'+
            '<span class="topic_txt">지급대상</span><br>'+
            '<span class="target_person">수급자, 차상위, 기타저소득</span><br><br>'+
            '<span class="topic_txt">영업시간</span><br>'+
            '<div style="display: flex;">'+
            '    <div>'+
            '        <span class="time">11:30 ~ 12:30</span><br>'+
            '        <span class="day_of_the_week">(월, 화, 수, 목, 금)</span>'+
            '    </div>'+
            '    <a class="call" href="tel:010-0000-0000">'+
            '        <div style="display: flex; align-items: center; justify-content: center;">'+
            '            <i class="fa fa-phone" aria-hidden="true" style="color: #ffffff; font-size: 30px;"></i>'+
            '        </div>'+
            '    </a>'+
            '</div>'
        obj.appendChild(lists);
    }
}