

    var nSq = 0, nTr = 0, nCi = 0, nBl = 0, nRe = 0, nGr = 0, nOr = 0, nYe = 0;
    var shadow = 0, chooseColor = 0, nToggleColor = 0;
    var btn_sfx = new Audio("btn_sfx.wav");
    var palettes = [[['rgb(231, 76, 60)', 0], ['rgb(39, 174, 96)', 0], ['rgb(52, 152, 219)', 0], ['rgb(230, 126, 34)', 0], ['rgb(241, 196, 15)', 0]], 
                    [['rgb(179, 55, 113)', 0], ['rgb(85, 230, 193)', 0], ['rgb(37, 204, 247)', 0], ['rgb(254, 164, 127)', 0], ['rgb(248, 239, 186)', 0]], 
                    [['rgb(255, 0, 0)', 0], ['rgb(91, 255, 0)', 0], ['rgb(0, 99, 255)', 0], ['rgb(158, 0, 255)', 0], ['rgb(232, 255, 0)', 0]], 
                    [['rgb(171, 55, 87)', 0], ['rgb(196, 54, 87)', 0], ['rgb(233, 50, 73)', 0], ['rgb(250, 70, 48)', 0], ['rgb(251, 99, 11)', 0]], 
                    [['rgb(116, 125, 140)', 0], ['rgb(164, 176, 190)', 0], ['rgb(210, 218, 226)', 0], ['rgb(206, 214, 224)', 0], ['rgb(223, 228, 234)', 0]]];
    var size = 5;


    function tableCreate() {
        var body = document.getElementById('table');
        var tbl = document.createElement('table');
        tbl.setAttribute('onclick', 'tableClick()');
        var tbdy = document.createElement('tbody');
        var cell = 0;
        for (var i = 0; i < (size + 3); ++i) {
            var tr = document.createElement('tr');
            for (var j = 0; j < (size + 2); ++j) {
                var td = document.createElement('td');
                if (i == 0)
                {
                    td.setAttribute('colSpan', size + 2);
                    td.setAttribute('class', 'text');
                    td.style.fontSize = "3vw";
                    td.style.letterSpacing = "1vw";
                    td.innerHTML = "Click to start";
                    tr.appendChild(td);
                    break;
                }
                if (i == 1)
                {
                    if (j == 0 || j == (size + 1))
                    {
                        td.setAttribute('rowSpan', size);
                        td.setAttribute('class', 'timer text');
                        td.innerHTML = "00";
                        tr.appendChild(td);
                    }
                    else
                    {
                        td.setAttribute('id', 'td' + cell);
                        td.setAttribute('onmouseover', 'hoverShape(this.id)');
                        var div = document.createElement('div');
                        div.setAttribute('class', 'shape square');
                        div.setAttribute('id', 'sq' + cell);
                        td.appendChild(div);
                        ++cell;
                    }
                }
                else if (i == (size + 1))
                {
                    td.setAttribute('class', 'stats text');
                    if (j == 0)
                        td.setAttribute('colSpan', size/2);
                    else if (j == 1)
                        td.setAttribute('colSpan', ((size + 2) - (Math.floor(size / 2))*2));
                    else if (j == 2)
                    {					    	
                        td.setAttribute('colSpan', size/2);
                        tr.appendChild(td)
                        break;    		
                    }
                }
                else if (i == (size + 2))
                {
                    if (j == 0)
                        td.setAttribute('colSpan', (Math.floor(size + 2) / 10) + 1);
                    else if (j == 1)
                        td.setAttribute('colSpan', (Math.floor(size) / 5) + 1);
                    else if (j == 2)
                        td.setAttribute('colSpan', ((size + 2) - ((Math.floor((size + 2) / 10) + 1)*2 + (Math.floor(size / 5) + 1)*2)));
                    else if (j == 3)
                        td.setAttribute('colSpan', (Math.floor(size) / 5) + 1);
                    else if (j == 4)
                        td.setAttribute('colSpan', (Math.floor(size + 2) / 10) + 1);

                    td.style.textDecoration = "underline";
                    td.setAttribute('class', 'stats text');	
                    if (j == 5) break;
                }
                else
                {
                    td.setAttribute('id', 'td' + cell);
                    td.setAttribute('onmouseover', 'hoverShape(this.id)');
                    var div = document.createElement('div');
                    div.setAttribute('class', 'shape square');
                    div.setAttribute('id', 'sq' + cell);
                    td.appendChild(div);
                    if (j == size) break;
                    ++cell;
                }
                tr.appendChild(td);
            }
            tbdy.appendChild(tr);
        }
        tbl.appendChild(tbdy);
        body.appendChild(tbl);
    }


    window.onload  = function start()
    {
        getColor();
        tableCreate();
        document.getElementById("sizeTableText").innerHTML = size + " X " + size;
    }


    function getColor()
    {
        var btn = document.getElementsByClassName("colorButton");
        btn[0].style.backgroundColor = palettes[chooseColor][0][0];
        btn[1].style.backgroundColor = palettes[chooseColor][1][0];
        btn[2].style.backgroundColor = palettes[chooseColor][2][0];
        btn[3].style.backgroundColor = palettes[chooseColor][3][0];
        btn[4].style.backgroundColor = palettes[chooseColor][4][0];

    }

    function toggleColor(color)
    {
        var btn = document.getElementsByClassName("colorButton");
        
            if (color == 0)
            {			
                if (nToggleColor < 3 || (palettes[0][0][1]))
                {
                    btn[color].classList.toggle("activated");
                    (palettes[0][0][1]) ? --nToggleColor : ++nToggleColor;
                    (palettes[0][0][1]) ? btn[0].style.opacity = 1 : btn[0].style.opacity = 0.25;
                    for (var i = 0; i < palettes.length; ++i)
                            (palettes[i][0][1]) ? palettes[i][0][1] = 0 : palettes[i][0][1] = 1;
                }
                else
                    alert("At least there has to be 2 colors aviable!");
            }
            else if (color == 1)
            {
                if (nToggleColor < 3 || (palettes[0][1][1]))
                {
                    btn[color].classList.toggle("activated");
                    (palettes[0][1][1]) ? btn[1].style.opacity = 1 : btn[1].style.opacity = 0.25;
                    (palettes[0][1][1]) ? --nToggleColor : ++nToggleColor;
                    for (var i = 0; i < palettes.length; ++i)
                            (palettes[i][1][1]) ? palettes[i][1][1] = 0 : palettes[i][1][1] = 1;
                }
                else
                    alert("At least there has to be 2 colors aviable!");
            }
            else if (color == 2)
            {
                if (nToggleColor < 3 || (palettes[0][2][1]))
                {
                    btn[color].classList.toggle("activated");
                    (palettes[0][2][1]) ? --nToggleColor : ++nToggleColor;
                    (palettes[0][2][1]) ? btn[2].style.opacity = 1 : btn[2].style.opacity = 0.25;
                    for (var i = 0; i < palettes.length; ++i)
                            (palettes[i][2][1]) ? palettes[i][2][1] = 0 : palettes[i][2][1] = 1;
                }
                else
                    alert("At least there has to be 2 colors aviable!");
            }
            else if (color == 3)
            {
                if (nToggleColor < 3 || (palettes[0][3][1]))
                {
                    btn[color].classList.toggle("activated");
                    (palettes[0][3][1]) ? --nToggleColor : ++nToggleColor;
                    (palettes[0][3][1]) ? btn[3].style.opacity = 1 : btn[3].style.opacity = 0.25;
                    for (var i = 0; i < palettes.length; ++i)
                            (palettes[i][3][1]) ? palettes[i][3][1] = 0 : palettes[i][3][1] = 1;
                }
                else
                    alert("At least there has to be 2 colors aviable!");
            }
            else if (color == 4)
            {
                if (nToggleColor < 3 || (palettes[0][4][1]))
                {
                    btn[color].classList.toggle("activated");
                    (palettes[0][4][1]) ? --nToggleColor : ++nToggleColor;
                    (palettes[0][4][1]) ? btn[4].style.opacity = 1 : btn[4].style.opacity = 0.5;
                    for (var i = 0; i < palettes.length; ++i)
                            (palettes[i][4][1]) ? palettes[i][4][1] = 0 : palettes[i][4][1] = 1;
                }
                else
                    alert("At least there has to be 2 colors aviable!");
            }
        getNewColor(); // change in the future
        getStats();

    }

    function changeColor()
    {
        btn_sfx.play();
        sq = document.getElementsByClassName("shape");
        btn_sfx.currentTime = 0;
        (chooseColor < palettes.length - 1) ? ++chooseColor : chooseColor = 0;
        getColor();
        for (var j = 0; j < sq.length; j++) {
            if (sq[j].classList.contains('triangle'))
            {
                if(sq[j].style.borderBottomColor == palettes[0][0][0] || sq[j].style.borderBottomColor == palettes[1][0][0] || sq[j].style.borderBottomColor == palettes[2][0][0] || sq[j].style.borderBottomColor == palettes[3][0][0] || sq[j].style.borderBottomColor == palettes[4][0][0])
                    sq[j].style.borderBottomColor = palettes[chooseColor][0][0];
                else if(sq[j].style.borderBottomColor == palettes[0][1][0] || sq[j].style.borderBottomColor == palettes[1][1][0] || sq[j].style.borderBottomColor == palettes[2][1][0] || sq[j].style.borderBottomColor == palettes[3][1][0] || sq[j].style.borderBottomColor == palettes[4][1][0])
                    sq[j].style.borderBottomColor = palettes[chooseColor][1][0];
                else if(sq[j].style.borderBottomColor == palettes[0][2][0] || sq[j].style.borderBottomColor == palettes[1][2][0] || sq[j].style.borderBottomColor == palettes[2][2][0] || sq[j].style.borderBottomColor == palettes[3][2][0] || sq[j].style.borderBottomColor == palettes[4][2][0])
                    sq[j].style.borderBottomColor = palettes[chooseColor][2][0];
                else if(sq[j].style.borderBottomColor == palettes[0][3][0] || sq[j].style.borderBottomColor == palettes[1][3][0] || sq[j].style.borderBottomColor == palettes[2][3][0] || sq[j].style.borderBottomColor == palettes[3][3][0] || sq[j].style.borderBottomColor == palettes[4][3][0])
                    sq[j].style.borderBottomColor = palettes[chooseColor][3][0];
                else if(sq[j].style.borderBottomColor == palettes[0][4][0] || sq[j].style.borderBottomColor == palettes[1][4][0] || sq[j].style.borderBottomColor == palettes[2][4][0] || sq[j].style.borderBottomColor == palettes[3][4][0] || sq[j].style.borderBottomColor == palettes[4][4][0])
                    sq[j].style.borderBottomColor = palettes[chooseColor][4][0];
            }
            else
            {
                if(sq[j].style.backgroundColor == palettes[0][0][0] || sq[j].style.backgroundColor  == palettes[1][0][0] || sq[j].style.backgroundColor  == palettes[2][0][0] || sq[j].style.backgroundColor  == palettes[3][0][0] || sq[j].style.backgroundColor  == palettes[4][0][0])
                    sq[j].style.backgroundColor  = palettes[chooseColor][0][0];
                else if(sq[j].style.backgroundColor == palettes[0][1][0] || sq[j].style.backgroundColor == palettes[1][1][0] || sq[j].style.backgroundColor == palettes[2][1][0] || sq[j].style.backgroundColor == palettes[3][1][0] || sq[j].style.backgroundColor == palettes[4][1][0])
                    sq[j].style.backgroundColor = palettes[chooseColor][1][0];
                else if(sq[j].style.backgroundColor == palettes[0][2][0] || sq[j].style.backgroundColor == palettes[1][2][0] || sq[j].style.backgroundColor == palettes[2][2][0] || sq[j].style.backgroundColor == palettes[3][2][0] || sq[j].style.backgroundColor == palettes[4][2][0])
                    sq[j].style.backgroundColor = palettes[chooseColor][2][0];
                else if(sq[j].style.backgroundColor == palettes[0][3][0] || sq[j].style.backgroundColor == palettes[1][3][0] || sq[j].style.backgroundColor == palettes[2][3][0] || sq[j].style.backgroundColor == palettes[3][3][0] || sq[j].style.backgroundColor == palettes[4][3][0])
                    sq[j].style.backgroundColor = palettes[chooseColor][3][0];
                else if(sq[j].style.backgroundColor == palettes[0][4][0] || sq[j].style.backgroundColor == palettes[1][4][0] || sq[j].style.backgroundColor == palettes[2][4][0] || sq[j].style.backgroundColor == palettes[3][4][0] || sq[j].style.backgroundColor == palettes[4][4][0])
                    sq[j].style.backgroundColor = palettes[chooseColor][4][0];
            }
        }
        getStats();
    }

    function shadowMode()
    {
        btn_sfx.play();
        btn_sfx.currentTime = 0;
        (shadow) ? shadow = 0 : shadow = 1;
        // console.log(shadow);
        for (var j = 0; j < sp.length; j++) {
            if (sq[j].classList.contains('triangle'))
                sq[j].style.filter = "drop-shadow(12.5px 12.5px 0px rgba(0, 0, 0, 0.25))";
            else
                sq[j].style.boxShadow = "12.5px 12.5px 0px 0px rgba(0,0,0,0.25)";
            sq[j].classList.remove('activated');
            sq[j].classList.remove('activatedShadow');
            document.getElementById("td" + j).classList.remove('activated');
        }
    }

    function getStats() {
        var stats = document.getElementsByClassName("stats");
        // console.log(nSq);
        stats[0].innerHTML = '&#9723 ' + nSq;
        stats[1].innerHTML = '&#9651 ' + nTr;
        stats[2].innerHTML = '&#9711 ' + nCi;
        stats[3].innerHTML = nRe;
        stats[3].style.textDecorationColor = palettes[chooseColor][0][0];
        stats[4].innerHTML = nGr;
        stats[4].style.textDecorationColor = palettes[chooseColor][1][0];
        stats[5].innerHTML = nBl;
        stats[5].style.textDecorationColor = palettes[chooseColor][2][0];
        stats[6].innerHTML = nOr;
        stats[6].style.textDecorationColor = palettes[chooseColor][3][0];
        stats[7].innerHTML = nYe;
        stats[7].style.textDecorationColor = palettes[chooseColor][4][0];
    }
    function darkLightMode(btn)
    {
        btn_sfx.play();
        btn_sfx.currentTime = 0;
        var body = document.getElementById("body");
        var text = document.getElementsByClassName("text");
        var button = document.getElementsByClassName("button");
        if (body.classList.contains('dark'))
        {

            body.classList.remove('dark');
            btn.innerHTML = "&#9789";
            for (var i = 0; i < text.length; ++i) {
                text[i].style.color = "#2d3436";
            }

        }
        else
        {
            body.classList.add('dark');
            btn.innerHTML = "&#9788";
            for (var i = 0; i < text.length; ++i)
                text[i].style.color = "#ecf0f1";
        }
        for (var i = 0; i < button.length; ++i) {
            button[i].classList.toggle("darkMode");
        }
    }



    function hoverShape(td) {
        var sq = "sq" + td.substr(2);;
        var sqf = document.getElementById(sq);
        if (!shadow)
        {
            sqf.classList.add('activated');
            document.getElementById(td).classList.add('activated');
        }
        else
            sqf.classList.add('activatedShadow');
        if (document.getElementById(sq).classList.contains('triangle'))
        {
            sqf.style.filter = "drop-shadow(0px 0px 0px rgba(0, 0, 0, 0.25))";
        }
        else
        {
            sqf.style.boxShadow = "0px 0px 0px 0px rgba(0,0,0,0.25)";
        }
    }

    function tableClick()
    {
        getNewShape();
        getNewColor();
        getStats();
        setTimeout(winGame, 200);
    }

    function getNewShape()
    {
        nSq = nTr = nCi = 0;
        var rand = 0, shape = ['square', 'triangle', 'circle'];
        sp = document.getElementsByClassName("shape");
        for (var j = 0; j < sp.length; j++) {
            if (sp[j].classList.contains('activated') || sp[j].classList.contains('activatedShadow'))
            {
                // alert(sq[j].style.backgroundColor);
                if (sp[j].classList.contains('triangle'))
                    ++nTr;
                else if (sp[j].classList.contains('square'))
                    ++nSq;
                else
                    ++nCi;
            }
            else
            {
                rand = shape[Math.floor(Math.random() * shape.length)];
                if (rand == 'triangle')
                {
                    ++nTr;
                    sp[j].style.boxShadow = "none";
                    if (!sp[j].classList.contains('triangle'))
                        sp[j].style.borderBottomColor = sp[j].style.background;
                    sp[j].style.filter = "drop-shadow(12.5px 12.5px 0px rgba(0, 0, 0, 0.25))";
                }
                else
                {
                    if (rand == 'square') ++nSq;
                    else ++nCi;
                    if (sp[j].classList.contains('triangle'))
                        sp[j].style.background = sp[j].style.borderBottomColor;
                    sp[j].style.filter = "none";
                    sp[j].style.boxShadow = "12.5px 12.5px 0px 0px rgba(0,0,0,0.25)";
                }
                sp[j].classList.remove('square');
                sp[j].classList.remove('triangle');
                sp[j].classList.remove('circle');
                sp[j].classList.add(rand);
            }
        }
    }

    function getNewColor(){
        nBl = nRe = nGr = nOr = nYe = 0;
        var rand = 0, color = palettes[chooseColor]; 
        var win = 1;
        sq = document.getElementsByClassName("shape");
        for (var j = 0; j < sq.length; j++) {
            var win_color = sq[0].style.background;
    //  && !(sq[j].style.backgroundColor == "rgb(149, 165, 166)") add
            if ((sq[j].classList.contains('activated') || sq[j].classList.contains('activatedShadow')))
            {
                if (sq[j].classList.contains('triangle'))
                {
                    sq[j].style.filter = "drop-shadow(12.5px 12.5px 0px rgba(0, 0, 0, 0.25))";
                    if (sq[j].style.borderBottomColor != win_color || sq[j].style.borderBottomColor == 'rgb(149, 165, 166)' || sq[j].style.borderBottomColor == "")
                    {
                        win = 0;
                    }
                    if (sq[j].style.borderBottomColor == color[0][0]) ++nRe; // red
                    else if (sq[j].style.borderBottomColor == color[1][0]) ++nGr; // green
                    else if (sq[j].style.borderBottomColor == color[2][0]) ++nBl; // blue
                    else if (sq[j].style.borderBottomColor == color[3][0]) ++nOr; // orange
                    else if (sq[j].style.borderBottomColor == color[4][0]) ++nYe; // yellow
                }
                else
                {
                    sq[j].style.boxShadow = "12.5px 12.5px 0px 0px rgba(0,0,0,0.25)";
                    if (sq[j].style.background == color[0][0]) ++nRe; // red
                    else if (sq[j].style.background == color[1][0]) ++nGr;// green
                    else if (sq[j].style.background == color[2][0]) ++nBl; // blue
                    else if (sq[j].style.background == color[3][0]) ++nOr; // orange
                    else if (sq[j].style.background == color[4][0]) ++nYe; // yellow
                }
                if (!shadow)
                {
                    sq[j].classList.remove('activated');
                    document.getElementById("td" + j).classList.remove('activated');
                }
                else
                    sq[j].classList.remove('activatedShadow');


                // console.log("IM IN-if");
            }
            else
            {
                // console.log("IM IN-else");
                var x = Math.floor(Math.random() * color.length);
                rand = color[x][0];
                if (sq[j].classList.contains('triangle'))
                {
                    sq[j].style.background = "none";

                    while(rand == sq[j].style.borderBottomColor || color[x][1] == 1)
                    {
                        x = Math.floor(Math.random() * color.length);
                        rand = color[x][0];
                    }
                    sq[j].style.borderBottomColor = rand;
                }
                else
                {
                    while(rand == sq[j].style.background || color[x][1] == 1)
                    {
                        x = Math.floor(Math.random() * color.length);
                        rand = color[x][0];
                    }
                    sq[j].style.background = rand;

                }
                if (rand == color[0][0]) ++nRe; // red
                else if (rand == color[1][0]) ++nGr;// green
                else if (rand == color[2][0]) ++nBl; // blue
                else if (rand == color[3][0]) ++nOr; // orange
                else if (rand == color[4][0]) ++nYe; // yellow
            }
        }
    }

    function winGame() {
        if (nRe >= size*size || nGr >= size*size || nBl >= size*size || nOr >= size*size || nYe >= size*size)
        {
            alert("YOU WON!");
            for (var j = 0; j < sq.length; j++)
            {
                if (sq[j].classList.contains('triangle'))
                    sq[j].style.borderBottomColor = 'rgb(149, 165, 166)';
                else
                    sq[j].style.backgroundColor = 'rgb(149, 165, 166)';
            }
            // ++size;
            // tableCreate();
        }
    }
    function stopWatch() {
        var time = 0, interval, offset;

    }