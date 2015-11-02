/*******************************************************************************
Copyright(c) 2015 LORD Corporation. All rights reserved.

MIT Licensed. See the included LICENSE.txt for a copy of the full MIT License.
*******************************************************************************/
#include "stdafx.h"
#include "AutoBalance.h"

namespace mscl
{
	ByteStream AutoBalance::buildCommand(NodeAddress nodeAddress, uint8 channelNumber, uint16 targetValue)
	{
		//build the command ByteStream
		ByteStream cmd;
		cmd.append_uint8(0x62);				//Command ID
		cmd.append_uint16(nodeAddress);		//Node address	(2 bytes)
		cmd.append_uint8(channelNumber);	//channel number
		cmd.append_uint16(targetValue);		//target balance value

		return cmd;
	}
}