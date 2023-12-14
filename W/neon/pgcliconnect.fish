#!/usr/bin/env fish
# For Sni see the following link
# https://neon.tech/docs/connect/connection-errors#the-endpoint-id-is-not-specified
echo ""
echo "Connections string for connecting to branchb1"
echo "Following command will be run - "
echo ""
echo "Type Password - nY3TZiOBqy7d"
echo ""
echo "pgcli 'postgresql://liqowomo:nY3TZiOBqy7d@ep-holy-glade-76106876.ap-southeast-1.aws.neon.tech/T1NeonDB?sslmode=require"
echo "&options=endpoint%3DT1NeonDB\'"
echo ""
pgcli 'postgresql://liqowomo:nY3TZiOBqy7d@ep-holy-glade-76106876.ap-southeast-1.aws.neon.tech/T1NeonDB?sslmode=require&options=endpoint%3DT1NeonDB'