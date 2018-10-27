import React from 'react'
import Space from './space';
import Player from './player';
const Table = (props) => {
  return (
    <div className="table_games">

        <ul className="round round_1_left" >
          <Space name='spacer' />
          <Player position='top' name='Chris Roberts' team='crob' />
          <Space name='game_spacer' />
          <Player position='bottom' name="Mike Mo" team='mo' />
            <Space name='spacer'/>
            <Player position='top' name="Sean Malto" team='crob'/>
            <Space name='game_spacer'/>
            <Player position='bottom' name="Eric Koston" team='mo' />
            <Space name='spacer'/>
            <Player position='top' name="Trent McClung" team='crob'/>
            <Space name='game_spacer'/>
            <Player position='bottom' name="John Dilorenzo" team='mo' />
            <Space name='spacer'/>
            <Player position='top' name="Tom Asta" team='crob' />
            <Space name='game_spacer'/>
            <Player position='bottom' name="Tom Rohrer" team='mo' />
            <Space name='spacer'/>
            <Player position='top' name="Chris Joslin" team='crob' />
            <Space name='game_spacer'/>
            <Player position='bottom' name="Carlos Ribeiro" team='mo' />
            <Space name='spacer'/>
            <Player position='top' name="Cody Cepeda" team='crob'/>
            <Space name='game_spacer'/>
            <Player position='bottom' name="Tyson Bowerbank" team='mo' />
            <Space name='spacer'/>
            <Player position='top' name="Felipe Gustavo" team='crob' />
            <Space name='game_spacer'/>
            <Player position='bottom' name="Nate Greenwood" team='mo' />
            <Space name='spacer'/>
            <Player position='top' name="Trevor McClung" team='crob' />
            <Space name='game_spacer'/>
            <Player position='bottom' name="Jack Olson" team='mo' />
            <Space name='spacer' />
          </ul>

          <ul className="round round_1_right">
            <Space name='spacer'/>
            <Player position='top' name="Luan Oliveira" team='crob' />
            <Space name='game_spacer'/>
            <Player position='bottom' name="Chris Colbourn" team='mo' />
            <Space name='spacer' />
            <Player position='top' name="Kevin White" team='crob' />
            <Space name='game_spacer' />
            <Player position='bottom' name='Hyun Kummer' team='mo' />
              <Space name='spacer'/>
              <Player position='top' name="Louie Lopez" team='crob' />
              <Space name='game_spacer'/>
              <Player position='bottom' name="Justin Drysen" team='mo' />
              <Space name='spacer'/>
              <Player position='top' name="Ishod Wair" team='crob' />
              <Space name='game_spacer'/>
              <Player position='bottom' name="TJ Rogers" team='mo' />
              <Space name='spacer'/>
              <Player position='top' name="Jamie Foy" team='crob' />
              <Space name='game_spacer'/>
              <Player position='bottom' name="Diego Najera" team='mo' />
              <Space name='spacer'/>
              <Player position='top' name="Taylor McClung" team='crob' />
              <Space name='game_spacer'/>
              <Player position='bottom' name="Robert Neal" team='mo' />
              <Space name='spacer'/>
              <Player position='top' name="Walker Ryan" team='crob' />
              <Space name='game_spacer'/>
              <Player position='bottom' name="Dominick Walker" team='mo' />
              <Space name='spacer'/>
              <Player position='top' name="Scott Decenzo" team='crob' />
              <Space name='game_spacer'/>
              <Player position='bottom' name="Sewa Kroetkov" team='mo' />
              <Space name='spacer' />
        </ul>


          <ul className="round round_2_left">
            <Space name='spacer' />
            <Player position='top' name="Mike Mo" team='mo' />
            <Space name='game_spacer' />
            <Player position='bottom' name='Sean Malto' team='crob' />
              <Space name='spacer'/>
              <Player position='top' name="Trent McClung" team='crob' />
              <Space name='game_spacer'/>
              <Player position='bottom' name="Tom Asta" team='crob' />
              <Space name='spacer'/>
              <Player position='top' name="Chris Joslin" team='crob' />
              <Space name='game_spacer'/>
              <Player position='bottom' name="Cody Cepeda" team='crob' />
              <Space name='spacer'/>
              <Player position='top' name="Felipe Gustavo" team='crob' />
              <Space name='game_spacer'/>
              <Player position='bottom' name="Trevor McClung" team='crob' />
              <Space name='spacer'/>
          </ul>

        <ul className="round round_2_right">
          <Space name='spacer' />
          <Player position='top' name="Luan Oliveira" team='crob' />
          <Space name='game_spacer' />
          <Player position='bottom' name='Kevin White' team='crob' />
            <Space name='spacer'/>
            <Player position='top' name="Louie Lopez" team='crob' />
            <Space name='game_spacer'/>
            <Player position='bottom' name='Ishod Wair'  team='crob' />
            <Space name='spacer'/>
            <Player position='top' name="Diego Najera" team='mo' />
            <Space name='game_spacer'/>
            <Player position='bottom' name="Robert Neal" team='mo' />
            <Space name='spacer'/>
            <Player position='top' name="Walker Ryan" team='crob' />
            <Space name='game_spacer'/>
            <Player position='bottom' name="Sewa Kroetkov" team='mo' />
            <Space name='spacer'/>
      </ul>

        <ul className="round round_3_left">
          <Space name='spacer' />
          <Player position='top' name="" />
          <Space name='game_spacer' />
          <Player position='bottom' name='' />
            <Space name='spacer'/>
            <Player position='top' name="" />
            <Space name='game_spacer'/>
            <Player position='bottom' name='Felipe Gustavo' team='crob' />
            <Space name='spacer'/>
        </ul>

        <ul className="round round_3_right">
          <Space name='spacer' />
          <Player position='top' name="" />
          <Space name='game_spacer' />
          <Player position='bottom' name='' />
            <Space name='spacer'/>
            <Player position='top' name="" />
            <Space name='game_spacer'/>
            <Player position='bottom' name='Sewa Kroetkov' team='mo'/>
            <Space name='spacer'/>
        </ul>
        <ul className='round round_4_left'>
          <Space name='spacer' />
          <Player position='top' name="" />
          <Space name='game_spacer' />
          <Player position='bottom' name='' />
            <Space name='spacer'/>
        </ul>
        <ul className='round round_4_right'>
          <Space name='spacer' />
          <Player position='top' name="" />
          <Space name='game_spacer' />
          <Player position='bottom' name='' />
            <Space name='spacer'/>
        </ul>
        <div className="finals">
          <Player position='top' name="" />
          <Space name='game_spacer' />
          <Player position='bottom' name='' />
          </div>

</div>
  )
}

export default Table;
