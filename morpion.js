function game(player1,player2)
{	
	if(player1)
	{
		visibilitecalque(name+"c","visible");
		game[nom.charAt(4)]=1;
		win();
		player1=0;
		player2=1;
		window.status="Your turn "+document.form2.j2.value;
	}
	else
	{
		visibilitecalque(name+"r","visible");		
		game[name.charAt(4)]=2;
		win();
		player1=1;
		player2=0;
		window.status="Your turn "+document.form1.j1.value;
	}
	if(p1_win)
	{
	  endgame ();
	}
	if(p2_win)
	{
	   endgame();
	}
	if(nul)
	{
	   endgame();
	}
}
if(player2)
{
    visibilitecalque(name+"c","visible");
    game[nom.charAt(4)]=1;
    win();
    player2=0;
    player1=1;
    window.status="Your turn "+document.form2.j2.value;
}
else
{
    visibilitecalque(name+"r","visible");		
    game[name.charAt(4)]=2;
    win();
    player2=1;
    player1=0;
    window.status="Your turn "+document.form1.j1.value;
}
if(p2_win)
{
  endgame ();
}
if(p1_win)
{
   endgame();
}
if(nul)
{
   endgame();
}


function endgame()
{
	if(p1_win)
	{
		reponse=confirm("Congratulation "+document.form1.j1.value+" You win.\AGAIN ?");
		document.form1.resultj1.value++;
	}
	if(p2_win)
	{
		reponse=confirm("Congratulation"+document.form2.j2.value+" You win.\AGAIN ?");
		document.form2.resultj2.value++;		
	}
	if(nul)
	{
		reponse=confirm("Match nul.\Again?");
	}
	if(!reponse)
	{
		document.form1.resultj1.value=0;
		document.form2.resultj2.value=0;
		player1=1;
		player2=0;
	}	
	for(a=0;a<9;a++)
	{
		game[a]=0;
		visibilitecalque("case"+a+"c","hidden");		
		visibilitecalque("case"+a+"r","hidden");		
	}
	coup=0;
	nul=0;
	p1_win=0;
	p2_win=0;
}



function verif(formname)
{
	if(formname=="form1")
	{
		document.form1.j1.value=prompt("what is the name of the player 1 ?",document.form1.j1.value);
		if(joueur1)
		{
			window.status="your turn "+document.form1.j1.value;
		}
	}
	if(formname=="form2")
	{
		document.form2.j2.value=prompt("what is the name of the player 2 ?",document.form2.j2.value);

		if(joueur2)
		{
			window.status="your turn"+document.form2.j2.value;}
        }
    }